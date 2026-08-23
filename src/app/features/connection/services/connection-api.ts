import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Connection, ConnectionPageResponse, ConnectionQueryParams, ConnectionRequest, ConnectionStatus, ConnectionStatusUpdateRequest } from '../../../shared/interfaces/connection';
import { toHttpParams } from '../../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class ConnectionApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/connection`;

  getAll(params: ConnectionQueryParams) {
    return this.httpClient.get<ConnectionPageResponse>(`${this.baseApiUrl}/all`, {
      params: toHttpParams(params),
    });
  }

  add(body: ConnectionRequest) {
    return this.httpClient.post<Connection>(`${this.baseApiUrl}/add`, body);
  }

  updateStatus(body: ConnectionStatusUpdateRequest) {
    return this.httpClient.patch<Connection>(`${this.baseApiUrl}/status`, body);
  }

  getStatus(userId: number) {
    return this.httpClient.get<Connection | null>(`${this.baseApiUrl}/status`, {
      params: toHttpParams({ userId }),
    });
  }
}
