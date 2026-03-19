import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { DialogHeader } from '../../dialogs/dialog-header/dialog-header';
import { LoadingButton } from '../../buttons/loading-button/loading-button';

export interface ImageCropperDialogData {
  file: File;
  title?: string;
  maintainAspectRatio?: boolean;
  aspectRatio?: number;
  roundCropper?: boolean;
  resizeToWidth?: number;
  resizeToHeight?: number;
  outputFormat?: 'png' | 'jpeg' | 'webp';
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
  readonly isCropping = signal(false);

  readonly file = computed(() => this.data?.file ?? null);
  readonly title = computed(() => this.data?.title ?? 'Crop image');
  readonly maintainAspectRatio = computed(() => this.data?.maintainAspectRatio ?? true);
  readonly aspectRatio = computed(() => this.data?.aspectRatio ?? 1);
  readonly roundCropper = computed(() => this.data?.roundCropper ?? false);

  onImageCropped(event: ImageCroppedEvent) {
    this.latestCropped.set(event);
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
    this.dialogRef?.close({ file });
  }

  outputFormat(): 'png' | 'jpeg' | 'webp' {
    return 'jpeg';
  }
}
