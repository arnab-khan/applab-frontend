import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IsUsernameExist } from '../../shared/interfaces/is-username-exist';
import { UserProfileImage } from '../../shared/interfaces/user';
import { toHttpParams } from '../../shared/utils/http';
import { finalize, Observable, tap } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class User {
  private httpClient = inject(HttpClient);
  private authService = inject(Auth);
  private baseApiUrl = `${environment.rootApiUrl}/user`;

  private withProfileImageLoading(request$: Observable<UserProfileImage>) {
    this.authService.profileState.update(state => ({ ...state, loading: true }));
    return request$.pipe(
      tap(profileImage => {
        this.authService.profileState.update(state => ({ ...state, profileImage }));
      }),
      finalize(() => {
        this.authService.profileState.update(state => ({ ...state, loading: false }));
      })
    );
  }

  checkIfUserExists(params: { username: string }) {
    return this.httpClient.get<IsUsernameExist>(`${this.baseApiUrl}/public/is-username-exist?${toHttpParams(params)}`);
  }

  getProfileImage() {
    return this.withProfileImageLoading(
      this.httpClient.get<UserProfileImage>(`${this.baseApiUrl}/profile-image`)
    );
  }

  updateProfileImage(profileImage: File) {
    const formData = new FormData();
    formData.append('profileImage', profileImage);
    for (const [key, value] of formData.entries()) {
      const file = value as File;

      console.log("Field:", key);
      console.log("Name:", file.name);
      console.log("Size KB:", file.size / 1024);
      console.log("Type:", file.type);
    }
    return this.withProfileImageLoading(
      this.httpClient.patch<UserProfileImage>(`${this.baseApiUrl}/update-profile-image`, formData)
    );
  }
}
