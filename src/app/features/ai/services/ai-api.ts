import { HttpClient, HttpEventType } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AiPageSelectionRequest, AiStreamResponse } from '../../../shared/interfaces/ai';

@Injectable({ providedIn: 'root' })
export class AiApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/ai`;

  chat(body: AiPageSelectionRequest) {
    return this.httpClient.post(`${this.baseApiUrl}/chat`, body, {
      responseType: 'text',
      observe: 'events',
      reportProgress: true,
      headers: { Accept: 'text/event-stream' },
    }).pipe(
      map(event => {
        if (event.type === HttpEventType.DownloadProgress) return event.partialText;
        if (event.type === HttpEventType.Response) return event.body ?? '';
        return undefined;
      }),
      filter((text): text is string => text !== undefined),
      map(text => parseAiStream(text)),
      distinctUntilChanged((previous, current) => previous.message === current.message && previous.history === current.history),
    );
  }
}

// HttpClient progress contains all text received so far. Only consume complete SSE events.
export class AiStreamError extends Error {}

export function parseAiStream(text: string): AiStreamResponse {
  const response: AiStreamResponse = { message: '' };
  text.split(/\r\n\r\n|\n\n|\r\r/).slice(0, -1).forEach(event => {
    const lines = event.split(/\r\n|\r|\n/);
    const type = lines.filter(line => line.startsWith('event:')).at(-1)?.slice(6).trim() || 'message';
    const data = lines
      .filter(line => line === 'data' || line.startsWith('data:'))
      // Spring's SseEmitter writes "data:" directly before each model chunk.
      // Preserve leading spaces because they belong to the generated answer.
      .map(line => line === 'data' ? '' : line.slice(5))
      .join('\n');
    if (type === 'error') throw new AiStreamError(data || 'The reply could not be completed. Please try again.');
    if (type === 'message') response.message += data;
    if (type === 'history') response.history = data;
  });
  return response;
}
