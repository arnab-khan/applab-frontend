import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-button',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading-button.html',
  styleUrl: './loading-button.scss',
})
export class LoadingButton {
  @Input({ required: true }) loading = false;
  @Input() diameter = 20;
  @Input() spinnerClass = 'stroke-violet-700';
}
