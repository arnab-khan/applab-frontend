import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { CreateUser, LoginUser, User } from '../../shared/interfaces/user';
import { catchError, finalize, of, tap } from 'rxjs';
import { LOGIN_ROUTE } from '../../shared/config/config';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private baseApiUrl = `${environment.rootApiUrl}/auth`;
  user = signal<User | null | undefined>(null);
  userLoaded = signal(false);

  private updateUser(user: User | null | undefined) {
    this.user.set(user);
    this.userLoaded.set(true)
  }

  signup(body: CreateUser) {
    return this.httpClient.post<User>(`${this.baseApiUrl}/signup`, body).pipe(
      tap(user => this.updateUser(user))
    );
  }

  login(body: LoginUser) {
    return this.httpClient.post<User>(`${this.baseApiUrl}/login`, body).pipe(
      tap(user => this.updateUser(user))
    );
  }

  me() {
    if (typeof window === 'undefined') {
      return of(null);
    }

    return this.httpClient.get<User>(`${this.baseApiUrl}/me`).pipe(
      tap(user => this.updateUser(user)),
      catchError(() => {
        this.updateUser(null);
        return of(null);
      }),
      finalize(() => this.userLoaded.set(true))
    );
  }

  logout() {
    this.updateUser(null);
    return this.httpClient.post(`${this.baseApiUrl}/logout`, {}, { responseType: 'text' }).pipe(
      tap({
        complete: () => {
          this.router.navigate([LOGIN_ROUTE]);
        }
      })
    );
  }
}
