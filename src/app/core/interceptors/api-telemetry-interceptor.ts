import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Telemetry } from '../services/telemetry';

export const apiTelemetryInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const telemetry = inject(Telemetry);
  const startedAt = performance.now();
  const trackApiCall = (success: boolean, status?: number): void => {
    telemetry.collectActivity({
      name: getApiTelemetryName(req.url),
      type: 'API_CALL',
      activity: {
        method: req.method,
        url: req.url,
        status,
        success,
        durationMs: Math.round(performance.now() - startedAt),
      },
    });
  };

  return next(req).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          trackApiCall(true, event.status);
        }
      },
      error: (error: unknown) => {
        trackApiCall(false, error instanceof HttpErrorResponse ? error.status : undefined);
      },
    })
  );
};

function getApiTelemetryName(url: string): string {
  const path = getUrlPath(url);
  const name = path
    .split('/')
    .filter(segment => segment && !/^\d+$/.test(segment))
    .join('_')
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
    .toLowerCase();

  return name ? `api_${name}` : 'api_call';
}

function getUrlPath(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url.split('?')[0];
  }
}
