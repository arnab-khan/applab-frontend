import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../components/user-profile/user-profile';
import { User, UserProfileImage } from '../../../../shared/interfaces/user';
import { Url } from '../../../../shared/services/url';

@Component({
  selector: 'app-public-profile',
  imports: [UserProfile],
  templateUrl: './public-profile.html',
  styleUrl: './public-profile.scss',
})
export class PublicProfile implements OnInit {
  private route = inject(ActivatedRoute);
  private url = inject(Url);

  profileUser = signal<User | null>(null);
  profileImage = signal<UserProfileImage | null>(null);
  error = signal<string | null>(null);

  ngOnInit() {
    const data = this.route.snapshot.data['publicProfile'];
    const user: User = data?.user;
    const updatedAt = user?.updatedAt;

    if (user) {
      this.profileUser.set(user);
      this.profileImage.set(data.profileImage);
      this.url.updateQueryParams({ updated: updatedAt });
    } else {
      this.error.set('Public profile not found.');
    }
  }
}
