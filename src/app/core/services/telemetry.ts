import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CollectActivityParams, TelemetryIdentity, TelemetryPayload } from '../../shared/interfaces/telemetry';
import { Auth } from './auth';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root',
})
export class Telemetry {
  private router = inject(Router);
  private auth = inject(Auth);
  private guest = inject(Guest);
  private payloads: TelemetryPayload[] = [];
  private sessionStorageKey = 'telemetrySessionId';

  collectActivity({ name, type, activity }: CollectActivityParams): void {
    const payload: TelemetryPayload = {
      name,
      type,
      activity,
      identity: this.getIdentity(),
      route: this.router.url,
      userAgent: navigator.userAgent,
    };

    this.payloads.push(payload);
    console.log('Telemetry payloads', this.payloads);
  }

  private getIdentity(): TelemetryIdentity {
    const userId = this.auth.authState().user?.id;

    if (userId) {
      return {
        type: 'USER',
        id: userId,
      };
    }

    const guestSessionId = this.guest.guestState().guestSessionId;

    if (guestSessionId) {
      return {
        type: 'GUEST',
        id: guestSessionId,
      };
    }

    return {
      type: 'SESSION',
      id: this.getSessionId(),
    };
  }

  private getSessionId(): string {
    const sessionId = sessionStorage.getItem(this.sessionStorageKey);

    if (sessionId) {
      return sessionId;
    }

    const newSessionId = crypto.randomUUID();
    sessionStorage.setItem(this.sessionStorageKey, newSessionId);

    return newSessionId;
  }
}
