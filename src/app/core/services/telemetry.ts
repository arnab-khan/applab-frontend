import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CollectActivityParams, TelemetryPayload } from '../../shared/interfaces/telemetry';
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
  private router = inject(Router);
  private auth = inject(Auth);
  private guest = inject(Guest);
  private payloads: TelemetryPayload[] = [];
  private sessionStorageKey = 'telemetryLocalSessionId';

  collectActivity({ name, type, activity }: CollectActivityParams): void {
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
      route: this.router.url,
      browser: this.getBrowserName(),
      platform: this.getPlatform(),
    };

    this.payloads.push(payload);
    console.log('Telemetry payloads', this.payloads);
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
