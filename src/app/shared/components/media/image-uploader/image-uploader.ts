import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import imageCompression from 'browser-image-compression';
import { FileCategory, isAllowedFileCategory } from '../../../utils/file-formats';
import { ImageCropper, ImageCropperDialogResult } from '../image-cropper/image-cropper';
import { ImagePicker } from '../image-picker/image-picker';
import { isMobile } from '../../../utils/device';

export interface ImageUploaderSelection {
  files: File[];
  dialogRef?: MatDialogRef<ImageCropper, ImageCropperDialogResult>;
}

const CATEGORY_ACCEPT_TYPES: Record<Exclude<FileCategory, 'all'>, string> = {
  image: 'image/*',
  video: 'video/*',
  audio: 'audio/*',
  application: 'application/*',
};

const CATEGORY_LABELS: Record<Exclude<FileCategory, 'all'>, string> = {
  image: 'image',
  video: 'video',
  audio: 'audio',
  application: 'application',
};

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
  allowedCategories = input<FileCategory[]>(['image']);
  multiple = input<boolean>(false);
  maxFiles = input<number>(1);
  cropButtonText = input<string>('Crop');
  onCrop = input<((file: File, dialogRef: MatDialogRef<ImageCropper, ImageCropperDialogResult>) => void) | undefined>();
  fileSelected = output<ImageUploaderSelection>();

  shouldUseImagePicker(): boolean {
    return isMobile() && this.getAcceptTypes() === 'image/*' && this.maxFiles() === 1;
  }

  openImagePicker() {
    const dialogRef = this.dialog.open(ImagePicker);
    dialogRef.afterClosed().subscribe((file: File) => {
      if (file) {
        this.processSelectedFile(file);
      }
    });
  }

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
      this.processSelectedFile(file);
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

  private processSelectedFile(file: File) {
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

  getAcceptTypes(): string {
    const categories = this.allowedCategories();
    if (categories.includes('all')) return '';
    return categories
      .filter((category): category is Exclude<FileCategory, 'all'> => category !== 'all')
      .map((category) => CATEGORY_ACCEPT_TYPES[category])
      .join(',');
  }

  private getInvalidTypeMessage(categories: FileCategory[]): string {
    if (categories.includes('all')) {
      return 'Only supported file types are allowed.';
    }

    const labels = categories
      .filter((category): category is Exclude<FileCategory, 'all'> => category !== 'all')
      .map((category) => CATEGORY_LABELS[category]);

    if (labels.length === 1) {
      return `Only ${labels[0]} files are supported.`;
    }

    return `Only ${labels.join(', ')} files are supported.`;
  }

  private validate(file: File): boolean {
    const categories = this.allowedCategories();
    const isAllowed = categories.includes('all') || categories.some((category) => category !== 'all' && isAllowedFileCategory(file, category));
    if (!isAllowed) {
      this.showError(this.getInvalidTypeMessage(categories));
      return false;
    }
    if (file.size > ((this.maxSize() + 10) * 1024 * 1024)) {
      this.showError(`File size must be ${this.maxSize()}MB or less.`);
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
