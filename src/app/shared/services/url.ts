import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Url {
  private document = inject(DOCUMENT);

  getBaseUrl(): string {
    const baseUrl = this.document?.location?.origin || this.document?.baseURI || '';
    return baseUrl;
  }

  toAbsoluteUrl(value: string): string {
    try {
      return new URL(value, this.getBaseUrl()).toString();
    } catch {
      return value;
    }
  }

  getCurrentUrl(): string {
    const location = this.document?.location;
    if (!location) {
      return '';
    }
    return `${location.origin}${location.pathname}`;
  }
}
