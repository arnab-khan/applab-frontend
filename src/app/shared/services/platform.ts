import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Platform {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isServer(): boolean {
    return !isPlatformBrowser(this.platformId);
  }
}
