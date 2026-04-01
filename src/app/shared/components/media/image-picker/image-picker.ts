import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFolderOpen, faCamera } from '@fortawesome/free-solid-svg-icons';
import { DialogHeader } from '../../dialogs/dialog-header/dialog-header';

@Component({
  selector: 'app-image-picker',
  imports: [MatDialogModule, DialogHeader, FontAwesomeModule],
  templateUrl: './image-picker.html',
  styleUrl: './image-picker.scss',
})
export class ImagePicker {
  private readonly dialogRef = inject(MatDialogRef<ImagePicker>, { optional: true });

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  readonly faFolderOpen = faFolderOpen;
  readonly faCamera = faCamera;

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.dialogRef?.close(file);
    }
  }
}