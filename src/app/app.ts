import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Auth } from './core/services/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { filter, map } from 'rxjs';
import { Platform } from './shared/services/platform';
import { toSignal } from '@angular/core/rxjs-interop';
import { Footer } from './core/layout/footer/footer';

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
  styleUrl: './app.scss'
})
export class App implements OnInit {

  private authService = inject(Auth);
  private platformService = inject(Platform);
  private router = inject(Router);

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

  // Combine auth completion and routing status
  showLoader = computed(() => !this.authState().completed || this.isRouting());

  ngOnInit(): void {
    this.getUser();
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
}
