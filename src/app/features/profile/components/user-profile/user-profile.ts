import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { User, UserProfileImage } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-user-profile',
  imports: [DatePipe, Thumbnail],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  user = input<User | null>(null);
  profileImage = input<UserProfileImage | null>(null);
  profileImageLoading = input(false);
}
