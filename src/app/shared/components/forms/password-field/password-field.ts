import {
  AfterContentInit,
  Component,
  ElementRef,
  Renderer2,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-field',
  imports: [FontAwesomeModule],
  templateUrl: './password-field.html',
  styleUrl: './password-field.scss',
})
export class PasswordField implements AfterContentInit {
  private hostElement = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private router = inject(Router);

  protected readonly isVisible = signal(false);
  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;
  readonly showForgotPassword = input(false);

  private inputElement: HTMLInputElement | null = null;

  ngAfterContentInit(): void {
    this.inputElement = this.hostElement.nativeElement.querySelector('input');

    if (!this.inputElement) {
      return;
    }

    this.renderer.addClass(this.inputElement, 'pr-12');
    this.syncInputType();
  }

  protected toggleVisibility(): void {
    this.isVisible.update((value) => !value);
    this.syncInputType();
  }

  protected onForgotPassword(): void {
    this.router.navigate(['/auth/email-entry'], {
      queryParams: { purpose: 'FORGOT_PASSWORD' },
    });
  }

  private syncInputType(): void {
    if (!this.inputElement) {
      return;
    }

    this.renderer.setAttribute(
      this.inputElement,
      'type',
      this.isVisible() ? 'text' : 'password'
    );
  }
}
