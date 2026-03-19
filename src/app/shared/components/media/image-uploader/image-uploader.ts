import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import imageCompression from 'browser-image-compression';
import { ALLOWED_EXTENSIONS, isFileFormatAllowed } from '../../../utils/file-formats';
import { ImageCropper, ImageCropperDialogResult } from '../image-cropper/image-cropper';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, MatDialogModule],
  templateUrl: './image-uploader.html',
  styleUrl: './image-uploader.scss',
})
export class ImageUploader {
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  maxSize = input<number>(20);
  maxCompressedSizeMb = input<number>(0.1);
  allowedFormats = input<string[]>(Object.values(ALLOWED_EXTENSIONS).flat());
  multiple = input<boolean>(false);
  maxFiles = input<number>(1);
  fileSelected = output<File[]>();

  async onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.files || inputElement.files.length === 0) {
      return;
    }
    const files = Array.from(inputElement.files);
    inputElement.value = '';
    const maxFiles = this.maxFiles();
    if (typeof maxFiles === 'number' && maxFiles > 0 && files.length > maxFiles) {
      this.showError(`You can select up to ${maxFiles} file${maxFiles === 1 ? '' : 's'}.`);
      return;
    }
    if (maxFiles === 1) {
      const file = files[0];
      if (!file) return;
      if (!this.validate(file)) return;
      const dialogRef = this.dialog.open<ImageCropper, { file: File }, ImageCropperDialogResult>(ImageCropper, {
        width: '60rem',
        data: { file },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (!result?.file) {
          return;
        }
        void this.emitCompressedFiles([result.file]);
      });
    } else {
      const selectedFiles: File[] = [];
      for (const file of files) {
        if (this.validate(file)) {
          selectedFiles.push(file);
        }
      }
      if (selectedFiles.length) {
        await this.emitCompressedFiles(selectedFiles);
      }
    }
  }

  private async emitCompressedFiles(files: File[]) {
    try {
      const compressedFiles = await Promise.all(files.map(file => this.compressImage(file)));
      this.fileSelected.emit(compressedFiles);
    } catch {
      this.showError('Unable to process the selected image. Please try again.');
    }
  }

  private async compressImage(file: File): Promise<File> {
    return imageCompression(file, {
      maxSizeMB: this.maxCompressedSizeMb(),
      useWebWorker: true,
      initialQuality: 1,
    });
  }

  private validate(file: File): boolean {
    if (!isFileFormatAllowed(file, this.allowedFormats())) {
      this.showError(`Invalid file format for "${file.name}". Allowed formats: ${this.allowedFormats().join(', ')}`);
      return false;
    }

    if (file.size > this.maxSize() * 1024 * 1024) {
      this.showError(`File "${file.name}" is too large. Maximum allowed size is ${this.maxSize()}MB.`);
      return false;
    }
    return true;
  }

  private showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['snackbar-error'],
    });
  }
}
