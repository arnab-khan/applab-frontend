import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thumbnail',
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './thumbnail.html',
  styleUrl: './thumbnail.scss',
})
export class Thumbnail {
  imageData = input<string | null | undefined>(null);
  fileType = input<string | null | undefined>(null);
  loading = input(false);
  alt = input('Profile image');
  size = input('1rem');
  radius = input('10%');
  readonly faUser = faUser;
}
