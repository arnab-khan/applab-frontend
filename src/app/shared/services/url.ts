import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  updateQueryParams(queryParams: Params) {
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
