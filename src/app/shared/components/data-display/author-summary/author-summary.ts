import { Component, ElementRef, contentChild, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Author } from '../../../interfaces/author';
import { Thumbnail } from '../../media/thumbnail/thumbnail';
import { ProfileApiService } from '../../../../features/profile/services/profile-api.service';
import { userProfileLink } from '../../../utils/link';

@Component({
  selector: 'app-author-summary',
  imports: [NgClass, RouterLink, Thumbnail],
  templateUrl: './author-summary.html',
  styleUrl: './author-summary.scss',
})
export class AuthorSummary {
  author = input.required<Author>();
  disableLink = input(false);
  userProfileLink = userProfileLink;
  classes = input<{
    authorNameColor?: string;
  }>({});
  avatarBottomEndContent = contentChild<ElementRef<HTMLElement>>('avatarBottomEnd');
  bodySecondaryContent = contentChild<ElementRef<HTMLElement>>('bodySecondary');
  readonly profileApiService = inject(ProfileApiService);

  isGuest() {
    return this.author().type === 'GUEST';
  }

  getAuthorLink() {
    return !this.disableLink() && this.author().type === 'USER'
      ? this.userProfileLink(this.author().username)
      : null;
  }

  getThumbnailName() {
    const author = this.author();
    if (this.isGuest()) {
      return this.getGuestCode(author.id);
    }

    return this.getAuthorName();
  }

  getAuthorName() {
    const author = this.author();
    if (this.isGuest()) {
      return `Guest #${this.getGuestCode(author.id).toLowerCase()}`;
    }

    return author?.name;
  }

  private getGuestCode(id: number) {
    let value = id;
    let code = '';

    while (value > 0) {
      value--;
      code = String.fromCharCode(65 + (value % 26)) + code;
      value = Math.floor(value / 26);
    }

    return code;
  }
}
