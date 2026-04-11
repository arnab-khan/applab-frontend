import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from '../../components/user-profile/user-profile';
import { User, UserProfileImage } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-public-profile',
  imports: [UserProfile],
  templateUrl: './public-profile.html',
  styleUrl: './public-profile.scss',
})
export class PublicProfile implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  profileUser = signal<User | null>(null);
  profileImage = signal<UserProfileImage | null>(null);
  error = signal<string | null>(null);

  ngOnInit() {
    const data = this.route.snapshot.data['publicProfile'];
    const user:User = data?.user;
    const updatedAt = user?.updatedAt;

    if (user) {
      this.profileUser.set(user);
      this.profileImage.set(data.profileImage);
      if (updatedAt) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { updated: updatedAt },
          queryParamsHandling: 'merge',
          replaceUrl: true,
        });
      }
    } else {
      this.error.set('Public profile not found.');
    }
  }
}
