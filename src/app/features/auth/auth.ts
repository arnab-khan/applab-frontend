import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth',
  imports: [NgClass, RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly containerClass = signal<string>('');

  constructor() {
    this.updateContainerClass();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateContainerClass());
  }

  private updateContainerClass(): void {
    this.containerClass.set(this.activatedRoute.firstChild?.snapshot.data['containerClass'] || '');
  }
}
