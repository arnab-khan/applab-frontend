import { Component, inject, input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dialog-header',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './dialog-header.html',
  styleUrl: './dialog-header.scss',
})
export class DialogHeader {
  private readonly dialogRef = inject(MatDialogRef<unknown>, { optional: true });

  readonly title = input<string>('');
  readonly containerClass = input<string>('');

  readonly faXmark = faXmark;

  onClose() {
    this.dialogRef?.close();
  }
}
