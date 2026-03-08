import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-formatted-text',
  templateUrl: './formatted-text.html',
  styleUrl: './formatted-text.scss',
})
export class FormattedText {
  text = input('');
  maxLength = input<number | null>(null);

  displayText = computed(() => {
    const value = this.text() ?? '';
    const limit = this.maxLength();

    if (limit === null || limit <= 0 || value.length <= limit) {
      return value;
    }

    return `${value.slice(0, limit)}...`;
  });
}
