import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { tap } from 'rxjs';
import { NetworkNotification } from '../services/network-notification';

export const networkErrorInterceptor: HttpInterceptorFn = (req, next) => {
  if (!isPlatformBrowser(inject(PLATFORM_ID))) {
    return next(req);
  }

  const networkNotification = inject(NetworkNotification);

  return next(req).pipe(
    tap({
      error: (error: unknown) => {
        if (error instanceof HttpErrorResponse && error.status === 0) {
          networkNotification.showOffline();
        }
      },
    }),
  );
};
