import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CreateUser } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/auth`;

  signup(body: CreateUser) {
    return this.httpClient.post(`${this.baseApiUrl}/signup`, body);
  }
}
