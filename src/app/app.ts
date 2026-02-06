import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, Injector, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Auth } from './core/services/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize, of } from 'rxjs';
import { Platform } from './shared/services/platform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  private authService = inject(Auth);
  private platformService = inject(Platform);
  
  isLoading = signal(true);

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    if (!this.platformService.isBrowser()) {
      return;
    }
    this.isLoading.set(true);
    this.authService.me().pipe(
      finalize(() => {
        this.isLoading.set(false);
      })
    ).subscribe({
      next: (response) => {
        console.log('current user', response)
      },
      error: () => { }
    })
  }
}
