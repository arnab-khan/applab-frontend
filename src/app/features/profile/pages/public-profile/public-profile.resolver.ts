import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { ProfileApiService } from '../../services/profile-api.service';
import { Seo } from '../../../../shared/services/seo';
import { Url } from '../../../../shared/services/url';

@Injectable({
  providedIn: 'root',
})
export class PublicProfileResolver implements Resolve<any> {
  private profileApiService = inject(ProfileApiService);
  private seo = inject(Seo);
  private url = inject(Url);

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
        const profileImageUrl = data.profileImage
          ? this.profileApiService.getPublicProfileImageUrl(data.user.id)
          : this.url.toAbsoluteUrl('/images/profile/default-thumbnail.jpg');
        this.seo.update({
          title: data.user.name?.trim() || data.user.username?.trim() || 'Public profile',
          content: data.user.bio?.trim() || 'View this public profile on the app.',
          image: profileImageUrl,
          imageType: data.profileImage?.fileType,
          imageWidth: 500,
          imageHeight: 500,
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
    });
  }
}
