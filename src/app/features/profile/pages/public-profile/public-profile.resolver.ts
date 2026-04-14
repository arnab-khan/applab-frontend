import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map, of } from 'rxjs';
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
      return of({ user: null });
    }

    return this.profileApiService.getPublicUserByUsername({ username }).pipe(
      map(user => {
        this.seo.update({
          title: user.name?.trim() || user.username?.trim() || 'Public profile',
          content: user.bio?.trim() || 'View this public profile on the app.',
          image: user.profileImageUrl
            ? this.profileApiService.getPublicImageUrl(user.profileImageUrl)
            : this.url.toAbsoluteUrl('/images/profile/default-thumbnail.jpg'),
          imageWidth: 500,
          imageHeight: 500,
        });
        return { user };
      }),
      catchError(() => {
        this.setNotFoundSeo();
        return of({ user: null });
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
