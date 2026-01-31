import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IsUsernameExist } from '../../shared/interfaces/is-username-exist';
import { toHttpParams } from '../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class User {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/user`;

  checkIfUserExists(params: { username: string }) {
    return this.httpClient.get<IsUsernameExist>(`${this.baseApiUrl}/public/is-username-exist?${toHttpParams(params)}`);
  }
}