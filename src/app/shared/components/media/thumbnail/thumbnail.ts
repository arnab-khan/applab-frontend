import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { getAvatarColor, getInitials } from '../../../utils/avatar';
import { ImageViewer } from '../image-viewer/image-viewer';

@Component({
  selector: 'app-thumbnail',
  imports: [FontAwesomeModule, NgClass, NgStyle, ImageViewer],
  templateUrl: './thumbnail.html',
  styleUrl: './thumbnail.scss',
})
export class Thumbnail {
  private readonly imageLoading = signal(false);
  readonly imageFailed = signal(false);

  imageData = input<string | null | undefined>(null);
  imageUrl = input<string | null | undefined>(null);
  viewerImageUrl = input<string | null | undefined>(null);
  fileType = input<string | null | undefined>(null);
  name = input<string | null | undefined>(null);
  loading = input(false);
  alt = input('Profile image');
  size = input('1rem');
  radius = input('10%');
  showBorder = input(true);
  readonly faUser = faUser;

  readonly fallbackInitial = computed(() => {    
    return getInitials(this.name() || '');
  });

  readonly fallbackColor = computed(() => {
    const initials = this.fallbackInitial();
    return getAvatarColor(initials);
  });

  readonly shouldShowLoading = computed(() => this.loading() || (this.imageUrl() ? this.imageLoading() : false));

  constructor() {
    effect(() => {
      if (this.imageUrl()) {
        this.imageLoading.set(true);
        this.imageFailed.set(false);
        return;
      }

      this.imageLoading.set(false);
      this.imageFailed.set(false);
    });
  }

  onImageLoad() {
    this.imageLoading.set(false);
  }

  onImageError() {
    this.imageLoading.set(false);
    this.imageFailed.set(true);
  }

}
