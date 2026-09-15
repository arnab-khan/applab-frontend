import { HttpEventType, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { AiApi, AiStreamError, parseAiStream } from './ai-api';
import { AiStreamResponse } from '../../../shared/interfaces/ai';

describe('AiApi', () => {
  it('treats a named stream error as a failure instead of assistant text', () => {
    expect(() => parseAiStream('data:Hello\n\nevent:error\ndata:Service unavailable\n\n'))
      .toThrowError(AiStreamError);
    expect(() => parseAiStream('event: error\ndata:Service unavailable\n\n'))
      .toThrowError('Service unavailable');
    expect(parseAiStream('data:Hello\n\nevent:error\ndata:Incomplete')).toEqual({ message: 'Hello' });
  });
  afterEach(() => TestBed.inject(HttpTestingController).verify());

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
  });

  it('posts conversation context and emits complete streamed text without duplicates', () => {
    const body = {
      message: 'How do I add a todo?', currentRoute: '/todo',
      history: 'previous-history',
    };
    const replies: AiStreamResponse[] = [];
    TestBed.inject(AiApi).chat(body).subscribe(reply => replies.push(reply));
    const request = TestBed.inject(HttpTestingController).expectOne(`${environment.rootApiUrl}/ai/chat`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(body);
    expect(request.request.headers.get('Accept')).toBe('text/event-stream');
    request.event({ type: HttpEventType.DownloadProgress, loaded: 20, partialText: 'data:Hello\n\ndata: wor' });
    request.event({ type: HttpEventType.DownloadProgress, loaded: 30, partialText: 'data:Hello\n\ndata: world\n\n' });
    const fullResponse = 'data:Hello\n\ndata: world\n\nevent:history\ndata:next-history\n\n';
    request.event({ type: HttpEventType.DownloadProgress, loaded: fullResponse.length, partialText: fullResponse });
    request.flush(fullResponse);
    expect(replies).toEqual([{ message: 'Hello' }, { message: 'Hello world' }, { message: 'Hello world', history: 'next-history' }]);
  });

  it('preserves multiline data and whitespace while ignoring metadata and incomplete events', () => {
    expect(parseAiStream(': heartbeat\r\n\r\nevent:message\r\ndata:first\r\ndata: second\r\n\r\ndata:pending'))
      .toEqual({ message: 'first\n second' });
  });

  it('propagates request failures', () => {
    let status: number | undefined;
    TestBed.inject(AiApi).chat({ message: 'Hi', currentRoute: '/', history: '' })
      .subscribe({ error: error => status = error.status });
    TestBed.inject(HttpTestingController).expectOne(`${environment.rootApiUrl}/ai/chat`)
      .flush('Unavailable', { status: 503, statusText: 'Service unavailable' });
    expect(status).toBe(503);
  });
  it('keeps history separate and uses the latest complete history event verbatim', () => {
    expect(parseAiStream('event:history\ndata:old\n\ndata:Hello\n\nevent: history\ndata:opaque token\ndata:second line\n\nevent:history\ndata:unfinished'))
      .toEqual({ message: 'Hello', history: 'opaque token\nsecond line' });
    expect(parseAiStream('event:history\ndata:\n\n')).toEqual({ message: '', history: '' });
  });
});
