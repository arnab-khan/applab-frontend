import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PaginationQueryParams } from '../../../shared/interfaces/pagination';
import { TelemetryLocalSessionPageResponse, TelemetryPageResponse, TelemetryQueryParams } from '../../../shared/interfaces/telemetry';
import { toHttpParams } from '../../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class TelemetryApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/telemetry`;

  getAll(params: TelemetryQueryParams) {
    return this.httpClient.get<TelemetryPageResponse>(`${this.baseApiUrl}/all`, {
      params: toHttpParams(params),
    });
  }

  getLocalSessions(params: PaginationQueryParams) {
    return this.httpClient.get<TelemetryLocalSessionPageResponse>(`${this.baseApiUrl}/local-sessions`, {
      params: toHttpParams(params),
    });
  }
}
