import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import imageCompression from 'browser-image-compression';
import { ALLOWED_EXTENSIONS, isFileFormatAllowed } from '../../../utils/file-formats';
import { ImageCropper, ImageCropperDialogResult } from '../image-cropper/image-cropper';

export interface ImageUploaderSelection {
  files: File[];
  dialogRef?: MatDialogRef<ImageCropper, ImageCropperDialogResult>;
}

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

  maxSize = input<number>(50);
  maxCompressedSizeMb = input<number>(0.1);
  allowedFormats = input<string[]>(Object.values(ALLOWED_EXTENSIONS).flat());
  multiple = input<boolean>(false);
  maxFiles = input<number>(1);
  cropButtonText = input<string>('Crop');
  onCrop = input<((file: File, dialogRef: MatDialogRef<ImageCropper, ImageCropperDialogResult>) => void) | undefined>();
  fileSelected = output<ImageUploaderSelection>();

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
      this.dialog.open<ImageCropper, {
        file: File;
        confirmButtonText?: string;
        onCrop?: (file: File, dialogRef: MatDialogRef<ImageCropper, ImageCropperDialogResult>) => void
      }, ImageCropperDialogResult>(ImageCropper, {
        width: '60rem',
        data: {
          file,
          confirmButtonText: this.cropButtonText(),
          onCrop: (croppedFile: File, cropperDialogRef: MatDialogRef<ImageCropper, ImageCropperDialogResult>) => {
            this.emitCompressedFiles(croppedFile, cropperDialogRef);
          },
        },
      });
    } else {
      const selectedFiles: File[] = [];
      for (const file of files) {
        if (this.validate(file)) {
          selectedFiles.push(file);
        }
      }
      if (selectedFiles.length) {
        this.fileSelected.emit({ files: selectedFiles });
      }
    }
  }

  private emitCompressedFiles(
    file: File,
    dialogRef?: MatDialogRef<ImageCropper, ImageCropperDialogResult>
  ) {
    this.compressImage(file).then((compressedFile) => {
      this.fileSelected.emit({ files: [compressedFile], dialogRef });
    }).catch(() => {
      this.showError('Unable to process the selected image. Please try again.');
    });
  }

  private async compressImage(file: File): Promise<File> {
    return imageCompression(file, {
      maxSizeMB: this.maxCompressedSizeMb(),
      useWebWorker: true,
      initialQuality: 1,
      maxWidthOrHeight: this.getMaxDimension(this.maxCompressedSizeMb())
    });
  }
  getMaxDimension(targetMB: number) {
    if (targetMB <= 0.05) return 400;
    if (targetMB <= 0.1) return 600;
    if (targetMB <= 0.2) return 800;
    return 1200;
  }

  private validate(file: File): boolean {
    if (!isFileFormatAllowed(file, this.allowedFormats())) {
      this.showError(`Invalid file format for "${file.name}". Allowed formats: ${this.allowedFormats().join(', ')}`);
      return false;
    }
    if (file.size > ((this.maxSize() + 10) * 1024 * 1024)) {
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
