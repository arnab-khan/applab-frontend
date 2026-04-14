import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thumbnail',
  imports: [FontAwesomeModule, NgClass, NgStyle],
  templateUrl: './thumbnail.html',
  styleUrl: './thumbnail.scss',
})
export class Thumbnail {
  private readonly fallbackGreenChannel = 205;
  private readonly imageLoading = signal(false);
  readonly imageFailed = signal(false);

  imageData = input<string | null | undefined>(null);
  imageUrl = input<string | null | undefined>(null);
  fileType = input<string | null | undefined>(null);
  name = input<string | null | undefined>(null);
  loading = input(false);
  alt = input('Profile image');
  size = input('1rem');
  radius = input('10%');
  readonly faUser = faUser;

  readonly fallbackInitial = computed(() => {    
    const trimmedName = this.name()?.trim();
    if (!trimmedName) return '';

    const words = trimmedName.split(/\s+/).filter(Boolean);
    return words
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  });

  readonly fallbackBackgroundColor = computed(() => {
    const initials = this.fallbackInitial();
    if (!initials) return '#f1f5f9';
    const redChannel = this.getColorChannelFromLetter(initials.charAt(0));
    const blueChannel = this.getColorChannelFromLetter(initials.charAt(1) || initials.charAt(0));
    return `rgb(${redChannel}, ${this.fallbackGreenChannel}, ${blueChannel})`;
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

  private getColorChannelFromLetter(letter: string): number {
    if (!letter) return 180;
    const alphabetIndex = letter.charCodeAt(0) - 64;
    return 110 + Math.round((alphabetIndex / 26) * 110);
  }
}
