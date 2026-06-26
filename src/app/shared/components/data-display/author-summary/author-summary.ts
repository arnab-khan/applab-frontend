import { ChangeDetectionStrategy, Component, ElementRef, computed, contentChild, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Author } from '../../../interfaces/author';
import { Thumbnail } from '../../media/thumbnail/thumbnail';
import { ProfileApiService } from '../../../../features/profile/services/profile-api.service';
import { userProfileLink } from '../../../utils/link';
import { getAuthorDisplayName } from '../../../utils/author';

@Component({
  selector: 'app-author-summary',
  imports: [NgClass, RouterLink, Thumbnail],
  templateUrl: './author-summary.html',
  styleUrl: './author-summary.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorSummary {
  author = input.required<Author>();
  disableLink = input(false);
  userProfileLink = userProfileLink;
  getAuthorDisplayName = getAuthorDisplayName;
  classes = input<{
    authorNameColor?: string;
  }>({});
  avatarBottomEndContent = contentChild<ElementRef<HTMLElement>>('avatarBottomEnd');
  bodySecondaryContent = contentChild<ElementRef<HTMLElement>>('bodySecondary');
  readonly profileApiService = inject(ProfileApiService);

  isGuest = computed(() => this.author().type === 'GUEST');
  getAuthorLink = computed(() =>
    !this.disableLink() && this.author().type === 'USER'
      ? this.userProfileLink(this.author().username)
      : null
  );
}
