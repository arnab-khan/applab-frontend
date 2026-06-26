import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, finalize, map, of, tap } from 'rxjs';
import { GuestCreateResponse, GuestExistsResponse } from '../../shared/interfaces/guest';
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
    guestSessionId?: number;
    status: GuestStatus;
    completed: boolean;
  }>({
    isGuest: false,
    guestSessionId: undefined,
    status: 'idle',
    completed: false,
  });

  private updateGuest(isGuest: boolean, options?: {
    guestSessionId?: number;
    updateStatus?: boolean;
    completed?: boolean;
  }) {
    const updateStatus = options?.updateStatus ?? true;

    this.guestState.set({
      isGuest,
      guestSessionId: options?.guestSessionId ?? this.guestState().guestSessionId,
      status: updateStatus ? (isGuest ? 'guest' : 'anonymous') : this.guestState().status,
      completed: options?.completed ?? this.guestState().completed,
    });
  }

  createGuest() {
    return this.httpClient.post<GuestCreateResponse>(`${this.baseApiUrl}/create`, {}).pipe(
      tap(response => this.updateGuest(true, { guestSessionId: response.guestSessionId, completed: true }))
    );
  }

  exists() {
    if (!this.platformService.isBrowser()) {
      return of(false);
    }

    this.guestState.update(state => ({ ...state, status: 'loading', completed: false }));
    return this.httpClient.get<GuestExistsResponse>(`${this.baseApiUrl}/exists`).pipe(
      tap(response => this.updateGuest(response.exists, { guestSessionId: response.guestSessionId, updateStatus: false })),
      map(response => response.exists),
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
