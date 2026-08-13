import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { credentialsInterceptor } from './core/interceptors/credentials-interceptor';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { apiTelemetryInterceptor } from './core/interceptors/api-telemetry-interceptor';
import { GlobalErrorHandler } from './core/services/global-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Scroll to the top whenever users navigate to a different route.
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    // Reuse server-rendered HTML in the browser and replay early user events after hydration.
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      // withFetch(), // Fetch is better for Angular SSR, but DevTools may sometimes not show response bodies for api requests.
      withInterceptors([
        credentialsInterceptor,
        apiTelemetryInterceptor,
      ])
    ),
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      }
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    }
  ]
};
