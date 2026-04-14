import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../components/user-profile/user-profile';
import { User } from '../../../../shared/interfaces/user';
import { ProfileApiService } from '../../services/profile-api.service';
import { Url } from '../../../../shared/services/url';

@Component({
  selector: 'app-public-profile',
  imports: [UserProfile],
  templateUrl: './public-profile.html',
  styleUrl: './public-profile.scss',
})
export class PublicProfile implements OnInit {
  private route = inject(ActivatedRoute);
  private profileApiService = inject(ProfileApiService);
  private url = inject(Url);

  profileUser = signal<User | null>(null);
  error = signal<string | null>(null);
  profileImageUrl = computed(() => {
    const user = this.profileUser();
    return user?.profileImageUrl ? this.profileApiService.getPublicImageUrl(user.profileImageUrl) : null;
  });

  ngOnInit() {
    const data = this.route.snapshot.data['publicProfile'];
    const user: User = data?.user;
    const updatedAt = user?.updatedAt;

    if (user) {
      this.profileUser.set(user);
      this.url.updateQueryParams({ updated: updatedAt });
    } else {
      this.error.set('Public profile not found.');
    }
  }
}
