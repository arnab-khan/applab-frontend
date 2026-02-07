import { Component, inject } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { Auth } from '../../services/auth';
import { LOGIN_ROUTE } from '../../../shared/config/config';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private authService = inject(Auth);
  private router = inject(Router);
  user = this.authService.authState;

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
