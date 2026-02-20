import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-sort-button',
  imports: [FontAwesomeModule],
  templateUrl: './sort-button.html',
  styleUrl: './sort-button.scss',
})
export class SortButton {
  label = input.required<string>();
  field = input.required<string>();
  activeField = input.required<string>();
  direction = input.required<SortDirection>();
  toggle = output<string>();

  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  onToggle() {
    this.toggle.emit(this.field());
  }
}
