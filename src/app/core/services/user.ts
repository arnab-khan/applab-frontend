import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { IsUsernameExist } from '../../shared/interfaces/is-username-exist';
import { EmailOtpRequest, EmailOtpResponse, EmailOtpVerificationRequest, PasswordVerificationRequest } from '../../shared/interfaces/auth';
import { UpdateProfileBasics, UpdateProfileCredentials, User as AuthUser, UserProfileImage } from '../../shared/interfaces/user';
import { toHttpParams } from '../../shared/utils/http';
import { catchError, EMPTY, finalize, Observable, of, tap, throwError } from 'rxjs';
import { Auth } from './auth';

const EMAIL_OTP_SESSION_ERROR_CODES = [
  'PASSWORD_VERIFICATION_REQUIRED',
  'EMAIL_CHANGE_SESSION_MISMATCH',
  'EMAIL_CHANGE_INVALID_OR_EXPIRED',
];

@Injectable({
  providedIn: 'root',
})
export class User {
  private httpClient = inject(HttpClient);
  private authService = inject(Auth);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
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
          loaded: true,
        }));
      }),
      catchError((error) => {
        if (error?.status === 404 || error?.status === 401) {
          this.authService.profileState.update(state => ({
            ...state,
            profileImage: null,
            loaded: true,
          }));
          return of(null);
        }

        return throwError(() => error);
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
    const profileState = this.authService.profileState();
    const profileImage = profileState.profileImage;
    if (profileState.loaded && !profileImage) {
      return of(null);
    }
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

  verifyPassword(body: PasswordVerificationRequest) {
    return this.httpClient.post<{ message: string }>(`${this.baseApiUrl}/verify-password`, body);
  }

  sendEmailOtp(body: EmailOtpRequest) {
    return this.httpClient.post<EmailOtpResponse>(`${this.baseApiUrl}/email/send-otp`, body).pipe(
      catchError(error => {
        if (EMAIL_OTP_SESSION_ERROR_CODES.includes(error.error?.code)) {
          this.snackBar.open('Your password verification session has expired.', '✖', {
            duration: 5000,
            panelClass: 'snackbar-error',
          });
          this.router.navigateByUrl('/profile/edit-profile');
          return EMPTY;
        }

        return throwError(() => error);
      })
    );
  }

  verifyEmailOtp(body: EmailOtpVerificationRequest) {
    return this.httpClient.post<AuthUser>(`${this.baseApiUrl}/email/verify-otp`, body).pipe(
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
          loaded: true,
        }));
      })
    );
  }
}
