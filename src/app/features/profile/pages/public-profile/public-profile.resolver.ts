import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { ProfileApiService } from '../../services/profile-api.service';
import { Seo } from '../../../../shared/services/seo';

@Injectable({
  providedIn: 'root',
})
export class PublicProfileResolver implements Resolve<any> {
  private profileApiService = inject(ProfileApiService);
  private seo = inject(Seo);
  private defaultImage = '/images/profile/default-thumbnail.jpg';

  resolve(route: ActivatedRouteSnapshot) {
    const username = route.paramMap.get('username');

    if (!username) {
      this.setNotFoundSeo();
      return of({ user: null, profileImage: null });
    }

    return this.profileApiService.getPublicUserByUsername({ username }).pipe(
      switchMap(user =>
        forkJoin({
          user: of(user),
          profileImage: this.profileApiService
            .getPublicProfileImagesByUserIds({ userIds: [user.id], fullImage: true })
            .pipe(map(images => images[0] ?? null)),
        })
      ),
      map(data => {
        this.seo.update({
          title: data.user.name?.trim() || data.user.username?.trim() || 'Public profile',
          content: data.user.bio?.trim() || 'View this public profile on the app.',
          image: this.defaultImage,
        });
        return data;
      }),
      catchError(() => {
        this.setNotFoundSeo();
        return of({ user: null, profileImage: null });
      })
    );
  }

  private setNotFoundSeo() {
    this.seo.update({
      title: 'Public profile not found',
      content: 'The requested public profile could not be found.',
      image: this.defaultImage,
    });
  }
}
