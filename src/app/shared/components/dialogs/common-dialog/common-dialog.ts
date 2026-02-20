import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export type CommonDialogType = 'warning' | 'error' | 'success' | 'confirm';

export interface CommonDialogData {
  type: CommonDialogType;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export interface CommonDialogResult {
  confirmed: boolean;
}

@Component({
  selector: 'app-common-dialog',
  imports: [MatDialogModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './common-dialog.html',
  styleUrl: './common-dialog.scss',
})
export class CommonDialog {
  private readonly dialogRef = inject(MatDialogRef<CommonDialog, CommonDialogResult>, { optional: true });
  private readonly incomingData = inject<CommonDialogData | null>(MAT_DIALOG_DATA, { optional: true });

  readonly dialogData = signal<CommonDialogData>({
    type: this.incomingData?.type ?? 'confirm',
    message: this.incomingData?.message,
    confirmText: this.incomingData?.confirmText,
    cancelText: this.incomingData?.cancelText,
  });

  readonly faXmark = faXmark;

  readonly type = computed(() => this.dialogData().type);
  readonly message = computed(() => this.dialogData().message);
  readonly confirmText = computed(() => this.dialogData().confirmText);
  readonly cancelText = computed(() => this.dialogData().cancelText);
  readonly confirmButtonClass = computed(() => {
    switch (this.type()) {
      case 'warning':
        return 'bg-red-100! hover:bg-red-200! text-red-700! focus-visible:ring-red-300!';
      case 'error':
        return 'bg-rose-100! hover:bg-rose-200! text-rose-700! focus-visible:ring-rose-300!';
      case 'success':
        return 'bg-emerald-100! hover:bg-emerald-200! text-emerald-700! focus-visible:ring-emerald-300!';
      case 'confirm':
      default:
        return 'bg-blue-100! hover:bg-blue-200! text-blue-700! focus-visible:ring-blue-300!';
    }
  });

  onConfirm() {
    this.dialogRef?.close({ confirmed: true });
  }

  onCancel() {
    this.dialogRef?.close({ confirmed: false });
  }
}
