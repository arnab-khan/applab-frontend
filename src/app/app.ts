import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Auth } from './core/services/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { filter, map } from 'rxjs';
import { Platform } from './shared/services/platform';
import { toSignal } from '@angular/core/rxjs-interop';
import { Footer } from './core/layout/footer/footer';
import { Telemetry } from './core/services/telemetry';

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

  pageReload(){
    console.log('Page reload');
  }

  trackRouteChange(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
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
