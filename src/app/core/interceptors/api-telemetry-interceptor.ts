import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Telemetry } from '../services/telemetry';

export const apiTelemetryInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  if (isTelemetryRequest(req.url)) {
    return next(req);
  }

  const telemetry = inject(Telemetry);
  const startedAt = performance.now();
  const trackApiCall = ({ success, status, errorMessage }: {
    success: boolean;
    status?: number;
    errorMessage?: string;
  }): void => {
    telemetry.collectActivity({
      name: getApiTelemetryName(req.url),
      type: 'API_CALL',
      activity: {
        method: req.method,
        url: req.url,
        status,
        success,
        ...(errorMessage ? { errorMessage } : {}),
        durationMs: Math.round(performance.now() - startedAt),
      },
    });
  };

  return next(req).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          trackApiCall({ success: true, status: event.status });
        }
      },
      error: (error: unknown) => {
        const httpError = error as HttpErrorResponse;

        trackApiCall({
          success: false,
          errorMessage: httpError?.error?.message || httpError?.error?.error || httpError?.message,
        });
      },
    })
  );
};

function isTelemetryRequest(url: string): boolean {
  return getUrlPath(url).startsWith('/telemetry');
}

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
