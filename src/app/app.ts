import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Auth } from './core/services/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { filter, fromEvent, map } from 'rxjs';
import { Platform } from './shared/services/platform';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Footer } from './core/layout/footer/footer';
import { Telemetry } from './core/services/telemetry';
import { PageRefresh } from './core/services/route-refresh';
import { NetworkNotification } from './core/services/network-notification';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Header,
    Footer,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {

  private authService = inject(Auth);
  protected platformService = inject(Platform);
  private router = inject(Router);
  private telemetry = inject(Telemetry);
  private pageRefresh = inject(PageRefresh);
  private dialog = inject(MatDialog);
  private networkNotification = inject(NetworkNotification);
  private destroyRef = inject(DestroyRef);
  private previousUrl: string | null = null;

  authState = this.authService.authState;

  // Track if the router is currently loading a route/chunk
  isRouting = toSignal(
    this.router.events.pipe(
      filter(event =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ),
      map(event => event instanceof NavigationStart)
    ),
    { initialValue: false }
  );

  showLoader = computed(() => {
    // if (!this.platformService.isBrowser()) {
    //   return false; // Stop loader during SSR
    // }
    return !this.authState().completed || this.isRouting();
  });

  ngOnInit(): void {
    this.getUser();
    this.trackRouteChange();
    if (this.platformService.isBrowser()) {
      fromEvent(window, 'online').pipe(
        takeUntilDestroyed(this.destroyRef),
      ).subscribe(() => {
        this.networkNotification.showOnline();
        this.dialog.closeAll();
        this.pageRefresh.refresh().catch(error => console.error('Failed to refresh page after reconnecting', error));
      });
    }
  }

  getUser() {
    if (!this.platformService.isBrowser()) {
      return;
    }
    this.authService.me().subscribe({
      next: (response) => {
        console.log('current user', response)
      },
      error: () => { }
    })
  }

  pageReload() {
    console.log('Page reload');
  }

  trackRouteChange(): void {
    let notifiedNavigationId: number | null = null;
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationError || event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(event => {
      if (!(event instanceof NavigationEnd)) {
        if (this.platformService.isBrowser() && !navigator.onLine && notifiedNavigationId !== event.id) {
          notifiedNavigationId = event.id;
          if (event instanceof NavigationStart) {
            this.router.currentNavigation()?.abort();
          }
          this.networkNotification.showOffline();
        }
        return;
      }

      const nextUrl = event.urlAfterRedirects;

      this.telemetry.collectActivity({
        name: 'route_change',
        type: 'ROUTER_CHANGE',
        activity: {
          from: this.previousUrl,
          to: nextUrl,
        },
      });

      this.previousUrl = nextUrl;
    });
  }
}
