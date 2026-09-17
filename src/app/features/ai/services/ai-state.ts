import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AiState {
  readonly open = signal(false);
  readonly minimized = signal(false);
  private launcher?: HTMLElement;

  openChat(launcher: HTMLElement): void {
    this.launcher = launcher;
    this.open.set(true);
  }

  closeChat(): void {
    this.open.set(false);
  }

  focusLauncher(): void {
    this.launcher?.focus();
  }
}
