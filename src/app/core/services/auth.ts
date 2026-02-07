import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { CreateUser, LoginUser, User } from '../../shared/interfaces/user';
import { catchError, finalize, of, tap } from 'rxjs';
import { LOGIN_ROUTE } from '../../shared/config/config';

type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'anonymous';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private baseApiUrl = `${environment.rootApiUrl}/auth`;

  authState = signal<{
    user: User | null;
    status: AuthStatus;
    completed: boolean;
  }>({
    user: null,
    status: 'idle',
    completed: false
  });

  private updateUser(user: User | null, updateStatus: boolean = true) {
    this.authState.set({
      user,
      status: updateStatus ? (user ? 'authenticated' : 'anonymous') : this.authState().status,
      completed: this.authState().completed
    });
  }

  signup(body: CreateUser) {
    this.authState.update(state => ({ ...state, status: 'loading', completed: false }));
    return this.httpClient.post<User>(`${this.baseApiUrl}/signup`, body).pipe(
      tap(user => this.updateUser(user)),
      finalize(() => this.authState.update(state => ({ ...state, completed: true })))
    );
  }

  login(body: LoginUser) {
    this.authState.update(state => ({ ...state, status: 'loading', completed: false }));
    return this.httpClient.post<User>(`${this.baseApiUrl}/login`, body).pipe(
      tap(user => this.updateUser(user)),
      finalize(() => this.authState.update(state => ({ ...state, completed: true })))
    );
  }

  me() {
    if (typeof window === 'undefined') {
      return of(null);
    }

    this.authState.update(state => ({ ...state, status: 'loading', completed: false }));
    return this.httpClient.get<User>(`${this.baseApiUrl}/me`).pipe(
      tap(user => this.updateUser(user, false)),
      catchError(() => {
        this.updateUser(null, false);
        return of(null);
      }),
      finalize(() => {
        const user = this.authState().user;
        this.authState.update(state => ({
          ...state,
          status: user ? 'authenticated' : 'anonymous',
          completed: true
        }));
      })
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
