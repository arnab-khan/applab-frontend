import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Auth } from './core/services/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  isLoading = signal(true);

  constructor(
   private authService: Auth,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.isLoading.set(true);
    this.authService.me().pipe(
      finalize(() => {
        this.isLoading.set(false);
      })
    ).subscribe({
      next: (response) => {
        console.log('current user', response)
      },
      error: () => {}
    })
  }
}
