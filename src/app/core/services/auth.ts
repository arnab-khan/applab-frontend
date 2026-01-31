import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CreateUser, LoginUser, User } from '../../shared/interfaces/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/auth`;

  currentUser = signal<User | null>(null);

  signup(body: CreateUser) {
    return this.httpClient.post(`${this.baseApiUrl}/signup`, body);
  }

  login(body: LoginUser) {
    return this.httpClient.post(`${this.baseApiUrl}/login`, body);
  }

  me() {
    return this.httpClient.get<User>(`${this.baseApiUrl}/me`).pipe(
      tap({
        next: user => this.currentUser.set(user),
        error: () => this.currentUser.set(null)
      })
    );;
  }
}
