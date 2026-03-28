import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IsUsernameExist } from '../../shared/interfaces/is-username-exist';
import { UpdateProfileBasics, UpdateProfileCredentials, User as AuthUser, UserProfileImage } from '../../shared/interfaces/user';
import { toHttpParams } from '../../shared/utils/http';
import { finalize, Observable, of, tap } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class User {
  private httpClient = inject(HttpClient);
  private authService = inject(Auth);
  private baseApiUrl = `${environment.rootApiUrl}/user`;

  private mergeAuthUser(user: AuthUser) {
    this.authService.authState.update(state => ({
      ...state,
      user: state.user ? { ...state.user, ...user } : user,
    }));
  }

  private withProfileImageLoading(request$: Observable<UserProfileImage>, options?: { showLoader?: boolean }) {
    const showLoader = options?.showLoader;

    if (showLoader) {
      this.authService.profileState.update(state => ({ ...state, loading: true }));
    }

    return request$.pipe(
      tap(profileImage => {
        this.authService.profileState.update(state => ({
          ...state,
          profileImage: state.profileImage ? {
            ...state.profileImage,
            ...Object.fromEntries(
              Object.entries(profileImage).filter(([, value]) => value != null)
            ),
          } : profileImage,
        }));
      }),
      finalize(() => {
        if (showLoader) {
          this.authService.profileState.update(state => ({ ...state, loading: false }));
        }
      })
    );
  }

  checkIfUserExists(params: { username: string }) {
    return this.httpClient.get<IsUsernameExist>(`${this.baseApiUrl}/public/is-username-exist?${toHttpParams(params)}`);
  }

  getProfileImage(params?: { fullImage: boolean }) {
    return this.withProfileImageLoading(
      this.httpClient.get<UserProfileImage>(
        `${this.baseApiUrl}/profile-image${params ? `?${toHttpParams(params)}` : ''}`
      ),
      { showLoader: !params?.fullImage }
    );
  }

  getFullProfileImage() {
    const profileImage = this.authService.profileState().profileImage;
    if (profileImage?.fileData) {
      return of(profileImage);
    }
    return this.getProfileImage({ fullImage: true });
  }

  updateProfileBasics(body: UpdateProfileBasics) {
    return this.httpClient.patch<AuthUser>(`${this.baseApiUrl}/update-profile-basics`, body).pipe(
      tap(user => this.mergeAuthUser(user))
    );
  }

  updateCredentials(body: UpdateProfileCredentials) {
    return this.httpClient.patch<AuthUser>(`${this.baseApiUrl}/update-credentials`, body).pipe(
      tap(user => this.mergeAuthUser(user))
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

  deleteProfileImage() {
    return this.httpClient.delete<void>(`${this.baseApiUrl}/profile-image`).pipe(
      tap(() => {
        this.authService.profileState.update(state => ({
          ...state,
          profileImage: null,
        }));
      })
    );
  }
}
