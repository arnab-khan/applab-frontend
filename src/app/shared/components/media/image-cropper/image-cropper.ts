import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { DialogHeader } from '../../dialogs/dialog-header/dialog-header';
import { LoadingButton } from '../../buttons/loading-button/loading-button';

export interface ImageCropperDialogData {
  file: File;
  title?: string;
  confirmButtonText?: string;
  maintainAspectRatio?: boolean;
  aspectRatio?: number;
  roundCropper?: boolean;
  resizeToWidth?: number;
  resizeToHeight?: number;
  outputFormat?: 'png' | 'jpeg' | 'webp';
  onCrop?: (
    file: File,
    dialogRef: MatDialogRef<ImageCropper, ImageCropperDialogResult>
  ) => void;
}

export interface ImageCropperDialogResult {
  file: File;
}

@Component({
  selector: 'app-image-cropper',
  imports: [MatDialogModule, MatButtonModule, ImageCropperComponent, DialogHeader, LoadingButton],
  templateUrl: './image-cropper.html',
  styleUrl: './image-cropper.scss',
})
export class ImageCropper {
  private readonly dialogRef = inject(MatDialogRef<ImageCropper, ImageCropperDialogResult>, { optional: true });
  private readonly data = inject<ImageCropperDialogData | null>(MAT_DIALOG_DATA, { optional: true });

  private readonly latestCropped = signal<ImageCroppedEvent | null>(null);
  readonly isImageLoading = signal(true);
  readonly isCropping = signal(false);

  readonly file = computed(() => this.data?.file ?? null);
  readonly title = computed(() => this.data?.title ?? 'Crop image');
  readonly confirmButtonText = computed(() => this.data?.confirmButtonText ?? 'Crop');
  readonly maintainAspectRatio = computed(() => this.data?.maintainAspectRatio ?? true);
  readonly aspectRatio = computed(() => this.data?.aspectRatio ?? 1);
  readonly roundCropper = computed(() => this.data?.roundCropper ?? false);

  onImageCropped(event: ImageCroppedEvent) {
    this.latestCropped.set(event);
  }

  onImageLoaded() {
    this.isImageLoading.set(false);
  }

  onCancel() {
    this.dialogRef?.close();
  }

  onConfirm() {
    this.isCropping.set(true);
    const cropped = this.latestCropped();
    const sourceFile = this.file();

    if (!cropped?.blob || !sourceFile) {
      this.isCropping.set(false);
      return;
    }

    const ext = this.outputFormat();
    const newName = `${sourceFile.name.replace(/\.[^.]+$/, '')}.${ext}`;
    const file = new File([cropped.blob], newName, { type: cropped.blob.type || sourceFile.type });
    if (this.data?.onCrop && this.dialogRef) {
      this.data.onCrop(file, this.dialogRef);
      return;
    }

    this.dialogRef?.close({ file });
  }

  outputFormat(): 'png' | 'jpeg' | 'webp' {
    return 'jpeg';
  }
}
