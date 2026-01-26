import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { toHttpParams } from '../../shared/utils/http';
import { IsUsernameExist } from '../../shared/interfaces/is-username-exist';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {

  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/auth`;
}
