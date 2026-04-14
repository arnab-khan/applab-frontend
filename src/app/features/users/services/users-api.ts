import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserPageResponse, UserQueryParams } from '../../../shared/interfaces/user';
import { toHttpParams } from '../../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class UsersApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/user`;

  getAll(params: UserQueryParams) {
    return this.httpClient.get<UserPageResponse>(`${this.baseApiUrl}/public/all`, {
      params: toHttpParams(params),
    });
  }
}
