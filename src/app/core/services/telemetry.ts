import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CollectActivityParams, TelemetryPayload } from '../../shared/interfaces/telemetry';
import { Platform } from '../../shared/services/platform';
import { Auth } from './auth';
import { Guest } from './guest';

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    brands?: { brand: string; version: string }[];
    platform?: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class Telemetry {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private auth = inject(Auth);
  private guest = inject(Guest);
  private platformService = inject(Platform);
  private payloads: TelemetryPayload[] = [];
  private baseApiUrl = `${environment.rootApiUrl}/telemetry`;
  private addApiUrl = `${this.baseApiUrl}/add`;
  private sessionStorageKey = 'telemetryLocalSessionId';
  private isSaving = false;

  constructor() {
    if (!this.platformService.isBrowser()) {
      return;
    }

    setInterval(() => this.savePayloads(), 60000);
    window.addEventListener('pagehide', () => this.savePayloadsBeforeUnload());
    window.addEventListener('beforeunload', () => this.savePayloadsBeforeUnload());
  }

  collectActivity({ name, type, activity }: CollectActivityParams): void {
    if (!this.platformService.isBrowser()) {
      return;
    }

    const userId = this.auth.authState().user?.id;
    const guestSessionId = this.guest.guestState().guestSessionId;
    const identityType = userId ? 'USER' : guestSessionId ? 'GUEST' : 'ANONYMOUS';
    const identityId = userId || guestSessionId;
    const payload: TelemetryPayload = {
      name,
      type,
      activity,
      localSessionId: this.getLocalSessionId(),
      identityType,
      identityId,
      route: this.router.url.split('?')[0],
      browser: this.getBrowserName(),
      platform: this.getPlatform(),
    };

    this.payloads.push(payload);
    console.log('Telemetry payloads', this.payloads);
  }

  // Flush queued telemetry during normal app usage.
  private savePayloads(): void {
    if (this.isSaving || !this.payloads.length) {
      return;
    }

    const payloads = [...this.payloads];
    this.payloads = [];

    this.isSaving = true;
    this.httpClient.post(this.addApiUrl, payloads).subscribe({
      next: () => {
        this.isSaving = false;
      },
      error: (error) => {
        console.error('Failed to save telemetry', error);
        this.payloads = [...payloads, ...this.payloads];
        this.isSaving = false;
      },
    });
  }

  // Use sendBeacon so telemetry can still be sent while the page is closing.
  private savePayloadsBeforeUnload(): void {
    if (!this.payloads.length) {
      return;
    }

    const payloads = [...this.payloads];
    const body = new Blob([JSON.stringify(payloads)], {
      type: 'application/json',
    });
    const queued = navigator.sendBeacon(this.addApiUrl, body);

    if (queued) {
      this.payloads = [];
    }
  }

  private getLocalSessionId(): string {
    const localSessionId = sessionStorage.getItem(this.sessionStorageKey);

    if (localSessionId) {
      return localSessionId;
    }

    const newLocalSessionId = crypto.randomUUID();
    sessionStorage.setItem(this.sessionStorageKey, newLocalSessionId);

    return newLocalSessionId;
  }

  private getBrowserName(): string {
    const brands = (navigator as NavigatorWithUserAgentData).userAgentData?.brands;
    const browserBrand = brands?.find(({ brand }) => brand !== 'Chromium' && brand !== 'Not A(Brand');

    if (browserBrand?.brand) {
      return browserBrand.brand;
    }

    const userAgent = navigator.userAgent;

    if (userAgent.includes('Edg/')) return 'Edge';
    if (userAgent.includes('OPR/') || userAgent.includes('Opera')) return 'Opera';
    if (userAgent.includes('Firefox/')) return 'Firefox';
    if (userAgent.includes('Chrome/')) return 'Chrome';
    if (userAgent.includes('Safari/')) return 'Safari';

    return 'Unknown';
  }

  private getPlatform(): string {
    const nav = navigator as NavigatorWithUserAgentData;

    return nav.userAgentData?.platform || navigator.platform || 'Unknown';
  }
}
