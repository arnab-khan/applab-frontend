import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { ProfileApiService } from '../../services/profile-api.service';

@Injectable({
  providedIn: 'root',
})
export class PublicProfileResolver implements Resolve<any> {
  private profileApiService = inject(ProfileApiService);

  resolve(route: ActivatedRouteSnapshot) {
    const username = route.paramMap.get('username');

    if (!username) {
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
      )
    );
  }
}
