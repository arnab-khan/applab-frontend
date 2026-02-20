import { Component, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Auth } from '../../services/auth';
import { PORTFOLIO_URL } from '../../../shared/config/config';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgTemplateOutlet],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private authService = inject(Auth);
  user = this.authService.authState;
  portfolioUrl = signal(PORTFOLIO_URL);

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logout successful');
      },
      error: (error) => {
        console.error('Logout error', error);
      }
    });
  }
}



