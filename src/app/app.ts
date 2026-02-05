import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Injector, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Auth } from './core/services/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  private injector = inject(Injector);

  isLoading = signal(true);

  constructor(
    private authService: Auth,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const isBrowser = isPlatformBrowser(this.injector);
    if (isBrowser) {
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
