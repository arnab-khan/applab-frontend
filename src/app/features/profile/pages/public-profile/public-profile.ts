import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../components/user-profile/user-profile';
import { UserListItemResponse, UserProfileImage } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-public-profile',
  imports: [UserProfile],
  templateUrl: './public-profile.html',
  styleUrl: './public-profile.scss',
})
export class PublicProfile implements OnInit {
  private route = inject(ActivatedRoute);

  profileUser = signal<UserListItemResponse | null>(null);
  profileImage = signal<UserProfileImage | null>(null);
  error = signal<string | null>(null);

  ngOnInit() {
    const data = this.route.snapshot.data['publicProfile'];
    if (!data?.user) {
      this.error.set('Public profile not found.');
      return;
    }

    this.profileUser.set(data.user);
    this.profileImage.set(data.profileImage);
  }
}
