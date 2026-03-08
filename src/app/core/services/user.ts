import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IsUsernameExist } from '../../shared/interfaces/is-username-exist';
import { UserProfileImage } from '../../shared/interfaces/user';
import { toHttpParams } from '../../shared/utils/http';
import { finalize, tap } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class User {
  private httpClient = inject(HttpClient);
  private authService = inject(Auth);
  private baseApiUrl = `${environment.rootApiUrl}/user`;

  checkIfUserExists(params: { username: string }) {
    return this.httpClient.get<IsUsernameExist>(`${this.baseApiUrl}/public/is-username-exist?${toHttpParams(params)}`);
  }

  getProfileImage() {
    this.authService.profileState.update(state => ({ ...state, loading: true }));
    return this.httpClient.get<UserProfileImage>(`${this.baseApiUrl}/profile-image`).pipe(
      tap(profileImage => {
        this.authService.profileState.update(state => ({ ...state, profileImage }));
      }),
      finalize(() => {
        this.authService.profileState.update(state => ({ ...state, loading: false }));
      })
    );
  }

  updateProfileImage(profileImage: File) {
    const body = new FormData();
    body.append('profileImage', profileImage);
    this.authService.profileState.update(state => ({ ...state, loading: true }));
    return this.httpClient.patch(`${this.baseApiUrl}/update-profile-image`, body).pipe(
      finalize(() => {
        this.authService.profileState.update(state => ({ ...state, loading: false }));
      })
    );
  }
}
