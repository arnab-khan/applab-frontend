import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { ConnectionListButton } from '../../../connection/components/connection-list-button/connection-list-button';
import { ConnectionRequestButton } from '../../../connection/components/connection-request-button/connection-request-button';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { User, UserProfileImage } from '../../../../shared/interfaces/user';
import { Share } from '../../../../shared/services/share';
import { Url } from '../../../../shared/services/url';
import { CapitalizeWordsPipe } from '../../../../shared/pipes/capitalize-words-pipe';
import { TelemetryClick } from '../../../../shared/directives/telemetry-click';

@Component({
  selector: 'app-user-profile',
  imports: [DatePipe, FontAwesomeModule, Thumbnail, CommonModule, CapitalizeWordsPipe, TelemetryClick, ConnectionRequestButton, ConnectionListButton],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  private url = inject(Url);
  private share = inject(Share);
  user = input<User | null>(null);
  profileImage = input<UserProfileImage | null>(null);
  profileImageUrl = input<string | null |undefined>(null);
  profileImageLoading = input(false);
  showConnectionRequestButton = input(true);
  readonly faCopy = faCopy;
  readonly faShareNodes = faShareNodes;

  copyProfileLink() {
    const link = this.profileUrl;
    return link ? this.share.copyTextToClipboard(link) : Promise.resolve();
  }

  shareProfileLink() {
    const link = this.profileUrl;
    const profileUser = this.user();

    if (!link) {
      return Promise.resolve();
    }

    return this.share.shareProfileData({
      title: profileUser?.name || profileUser?.username || 'Public profile',
      text: profileUser?.bio || 'Check out this profile',
      url: link,
    });
  }

  get profileUrl() {
    const profileUser = this.user();
    if (!profileUser?.username) {
      return '';
    }

    return this.url.addQueryParams(
      this.url.toAbsoluteUrl(`/user/${profileUser.username}`),
      { updated: profileUser.updatedAt },
    );
  }
}
