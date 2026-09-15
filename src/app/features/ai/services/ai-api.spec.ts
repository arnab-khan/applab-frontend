import { HttpEventType, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { AiApi, parseAiStream } from './ai-api';

describe('AiApi', () => {
  afterEach(() => TestBed.inject(HttpTestingController).verify());

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
  });

  it('posts conversation context and emits complete streamed text without duplicates', () => {
    const body = {
      message: 'How do I add a todo?', currentRoute: '/todo', userType: 'GUEST' as const,
      history: [{ role: 'USER' as const, message: 'Hello' }],
    };
    const replies: string[] = [];
    TestBed.inject(AiApi).chat(body).subscribe(reply => replies.push(reply));
    const request = TestBed.inject(HttpTestingController).expectOne(`${environment.rootApiUrl}/ai/chat`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(body);
    expect(request.request.headers.get('Accept')).toBe('text/event-stream');
    request.event({ type: HttpEventType.DownloadProgress, loaded: 20, partialText: 'data:Hello\n\ndata: wor' });
    request.event({ type: HttpEventType.DownloadProgress, loaded: 30, partialText: 'data:Hello\n\ndata: world\n\n' });
    request.flush('data:Hello\n\ndata: world\n\n');
    expect(replies).toEqual(['Hello', 'Hello world']);
  });

  it('preserves multiline data and whitespace while ignoring metadata and incomplete events', () => {
    expect(parseAiStream(': heartbeat\r\n\r\nevent:message\r\ndata:first\r\ndata: second\r\n\r\ndata:pending'))
      .toBe('first\n second');
  });

  it('propagates request failures', () => {
    let status: number | undefined;
    TestBed.inject(AiApi).chat({ message: 'Hi', currentRoute: '/', userType: 'GUEST', history: [] })
      .subscribe({ error: error => status = error.status });
    TestBed.inject(HttpTestingController).expectOne(`${environment.rootApiUrl}/ai/chat`)
      .flush('Unavailable', { status: 503, statusText: 'Service unavailable' });
    expect(status).toBe(503);
  });
});
