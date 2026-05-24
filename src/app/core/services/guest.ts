import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, finalize, of, tap } from 'rxjs';
import { Platform } from '../../shared/services/platform';

type GuestStatus = 'idle' | 'loading' | 'guest' | 'anonymous';

@Injectable({
  providedIn: 'root',
})
export class Guest {
  private httpClient = inject(HttpClient);
  private platformService = inject(Platform);
  private baseApiUrl = `${environment.rootApiUrl}/guest`;

  guestState = signal<{
    isGuest: boolean;
    status: GuestStatus;
    completed: boolean;
  }>({
    isGuest: false,
    status: 'idle',
    completed: false,
  });

  private updateGuest(isGuest: boolean, options?: {
    updateStatus?: boolean;
    completed?: boolean;
  }) {
    const updateStatus = options?.updateStatus ?? true;

    this.guestState.set({
      isGuest,
      status: updateStatus ? (isGuest ? 'guest' : 'anonymous') : this.guestState().status,
      completed: options?.completed ?? this.guestState().completed,
    });
  }

  createGuest() {
    return this.httpClient.post(`${this.baseApiUrl}/create`, {}).pipe(
      tap(() => this.updateGuest(true, { completed: true }))
    );
  }

  exists() {
    if (!this.platformService.isBrowser()) {
      return of(false);
    }

    this.guestState.update(state => ({ ...state, status: 'loading', completed: false }));
    return this.httpClient.get<boolean>(`${this.baseApiUrl}/exists`).pipe(
      tap(isGuest => this.updateGuest(isGuest, { updateStatus: false })),
      catchError(() => {
        this.updateGuest(false, { updateStatus: false });
        return of(false);
      }),
      finalize(() => {
        this.updateGuest(this.guestState().isGuest, { completed: true });
      })
    );
  }
}
