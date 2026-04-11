import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Url {
  private document = inject(DOCUMENT);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

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

  getFullCurrentUrl(): string {
    return this.document?.location?.href || '';
  }

  addQueryParams(url: string, queryParams: Record<string, string | number | boolean | Data | null | undefined>): string {
    if (!url) {
      return '';
    }
    const nextUrl = new URL(this.toAbsoluteUrl(url));
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        nextUrl.searchParams.set(key, String(value));
      }
    });
    return nextUrl.toString();
  }

  updateQueryParams(queryParams: Params) {
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
