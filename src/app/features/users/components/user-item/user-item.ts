import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { User } from '../../../../shared/interfaces/user';
import { CapitalizeWordsPipe } from '../../../../shared/pipes/capitalize-words-pipe';

@Component({
  selector: 'app-user-item',
  imports: [Thumbnail, DatePipe, RouterLink, CommonModule, CapitalizeWordsPipe],
  templateUrl: './user-item.html',
  styleUrl: './user-item.scss',
})
export class UserItem {
  private profileApiService = inject(ProfileApiService);
  user = input.required<User>();

  getCompressedProfileImageUrl() {
    const profileImageUrl = this.user().compressedProfileImageUrl;
    return profileImageUrl ? this.profileApiService.getPublicImageUrl(profileImageUrl) : null;
  }

  getProfileImageUrl() {
    const profileImageUrl = this.user().profileImageUrl;
    return profileImageUrl ? this.profileApiService.getPublicImageUrl(profileImageUrl) : null;
  }
}
