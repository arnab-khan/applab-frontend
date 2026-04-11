import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../components/user-profile/user-profile';
import { UserListItemResponse, UserProfileImage } from '../../../../shared/interfaces/user';
import { Seo } from '../../../../shared/services/seo';

@Component({
  selector: 'app-public-profile',
  imports: [UserProfile],
  templateUrl: './public-profile.html',
  styleUrl: './public-profile.scss',
})
export class PublicProfile implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(Seo);

  profileUser = signal<UserListItemResponse | null>(null);
  profileImage = signal<UserProfileImage | null>(null);
  error = signal<string | null>(null);

  ngOnInit() {
    const data = this.route.snapshot.data['publicProfile'];
    if (data?.user) {
      this.profileUser.set(data.user);
      this.profileImage.set(data.profileImage);
      this.seo.update({
        title: data.user.name?.trim() || 'Public profile',
        content: data.user.bio?.trim() || 'View this public profile on the app.',
      });
    } else {
      this.error.set('Public profile not found.');
      this.seo.update({
        title: 'Public profile not found',
        content: 'The requested public profile could not be found.',
      });
    }
  }
}
