import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRobot, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AiState } from '../../services/ai-state';

@Component({
  selector: 'app-ai-launcher',
  imports: [FontAwesomeModule],
  templateUrl: './ai-launcher.html',
  styleUrl: './ai-launcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiLauncher {
  readonly compact = input(false);
  readonly state = inject(AiState);
  readonly isCompact = computed(() => this.compact() || this.state.minimized());
  readonly faRobot = faRobot;
  readonly faXmark = faXmark;

  openChat(button: HTMLButtonElement): void {
    if (this.compact() && this.state.open()) {
      this.state.closeChat();
      return;
    }

    this.state.openChat(button);
  }
}
