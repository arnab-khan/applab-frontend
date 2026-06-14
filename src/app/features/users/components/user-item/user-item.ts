import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { HighlightText } from '../../../../shared/directives/highlight-text';
import { User } from '../../../../shared/interfaces/user';
import { CapitalizeWordsPipe } from '../../../../shared/pipes/capitalize-words-pipe';
import { userProfileLink } from '../../../../shared/utils/link';

@Component({
  selector: 'app-user-item',
  imports: [Thumbnail, DatePipe, RouterLink, CommonModule, CapitalizeWordsPipe, HighlightText],
  templateUrl: './user-item.html',
  styleUrl: './user-item.scss',
})
export class UserItem {
  private profileApiService = inject(ProfileApiService);
  userProfileLink = userProfileLink;
  user = input.required<User>();
  searchTerm = input('');

  getCompressedProfileImageUrl() {
    return this.profileApiService.getPublicImageUrl(this.user().compressedProfileImageUrl);
  }

  getProfileImageUrl() {
    return this.profileApiService.getPublicImageUrl(this.user().profileImageUrl);
  }
}
