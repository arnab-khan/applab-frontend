import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Injector, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { CreateUser, LoginUser, User, UserProfileImage } from '../../shared/interfaces/user';
import { catchError, finalize, of, tap } from 'rxjs';
import { LOGIN_ROUTE } from '../../shared/config/config';
import { User as UserService } from './user';

type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'anonymous';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private injector = inject(Injector);
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

  profileState = signal<{
    profileImage: UserProfileImage | null;
    loading: boolean;
  }>({
    profileImage: null,
    loading: true
  });

  private updateUser(user: User | null, options?: {
    updateStatus?: boolean;
    completed?: boolean;
    fetchProfileImage?: boolean;
  }) {
    const updateStatus = options?.updateStatus ?? true;

    this.authState.set({
      user,
      status: updateStatus ? (user ? 'authenticated' : 'anonymous') : this.authState().status,
      completed: options?.completed ?? this.authState().completed
    });

    if (!user) {
      this.profileState.set({ profileImage: null, loading: false });
    }

    if (options?.fetchProfileImage && user?.id) {
      this.injector.get(UserService).getProfileImage().subscribe();
    }
  }

  signup(body: CreateUser) {
    return this.httpClient.post<User>(`${this.baseApiUrl}/signup`, body).pipe(
      tap(user => this.updateUser(user)),
      finalize(() => this.updateUser(this.authState().user, { updateStatus: false, completed: true, fetchProfileImage: true }))
    );
  }

  login(body: LoginUser) {
    return this.httpClient.post<User>(`${this.baseApiUrl}/login`, body).pipe(
      tap(user => this.updateUser(user)),
      finalize(() => this.updateUser(this.authState().user, { updateStatus: false, completed: true, fetchProfileImage: true }))
    );
  }

  me() {
    if (typeof window === 'undefined') {
      return of(null);
    }

    this.authState.update(state => ({ ...state, status: 'loading', completed: false }));
    return this.httpClient.get<User>(`${this.baseApiUrl}/me`).pipe(
      tap(user => this.updateUser(user, { updateStatus: false })),
      catchError(() => {
        this.updateUser(null, { updateStatus: false });
        return of(null);
      }),
      finalize(() => {
        this.updateUser(this.authState().user, { completed: true, fetchProfileImage: true });
      })
    );
  }

  logout() {
    return this.httpClient.post(`${this.baseApiUrl}/logout`, {}, { responseType: 'text' }).pipe(
      tap({
        complete: () => {
          this.updateUser(null);
          this.router.navigate([LOGIN_ROUTE]);
        }
      })
    );
  }
}
