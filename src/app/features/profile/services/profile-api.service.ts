import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { User, UserPageResponse, UserProfileImage, UserQueryParams } from '../../../shared/interfaces/user';
import { toHttpParams } from '../../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileApiService {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/user`;

  getAll(params: UserQueryParams) {
    return this.httpClient.get<UserPageResponse>(`${this.baseApiUrl}/public/all`, {
      params: toHttpParams({ ...params }),
    });
  }

  getPublicUserByUsername(params: { username: string }) {
    return this.httpClient.get<User>(`${this.baseApiUrl}/public/by-username`, {
      params: toHttpParams(params),
    });
  }

  getPublicProfileImagesByUserIds(params: { userIds: number[]; fullImage?: boolean }) {
    return this.httpClient.get<UserProfileImage[]>(`${this.baseApiUrl}/public/profile-image/by-user-ids`, {
      params: toHttpParams({
        userIds: params.userIds,
        fullImage: params.fullImage ?? false,
      }),
    });
  }

  getPublicProfileImageUrl(userId: number) {
    return `${this.baseApiUrl}/public/profile-image/raw/${userId}`;
  }
}
