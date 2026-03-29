import {
  AfterContentInit,
  Component,
  ElementRef,
  Renderer2,
  inject,
  signal,
} from '@angular/core';
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

  protected readonly isVisible = signal(false);
  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;

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
