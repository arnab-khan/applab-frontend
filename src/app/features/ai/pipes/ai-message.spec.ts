import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { AiMessagePipe } from './ai-message';

describe('AiMessagePipe', () => {
  let pipe: AiMessagePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    pipe = TestBed.runInInjectionContext(() => new AiMessagePipe());
  });

  it('formats bold text and preserves surrounding text', () => {
    expect(pipe.transform('Use **Todo** today.')).toEqual([
      { text: 'Use ', bold: false }, { text: 'Todo', bold: true }, { text: ' today.', bold: false },
    ]);
  });

  it('supports route markers with query parameters and trailing punctuation', () => {
    const parts = pipe.transform('Open router__/auth/email-entry?purpose=signup.');
    const link = parts.find(part => part.route)!;
    expect(TestBed.inject(Router).serializeUrl(link.route!)).toBe('/auth/email-entry?purpose=signup');
    expect(parts.at(-1)?.text).toBe('.');
  });

  it('supports bracketed routes inside bold text', () => {
    const parts = pipe.transform('**router__</todo>**');
    expect(parts[0].bold).toBe(true);
    expect(TestBed.inject(Router).serializeUrl(parts[0].route!)).toBe('/todo');
  });

  it('keeps HTML and external route markers as plain text', () => {
    const parts = pipe.transform('<script>alert(1)</script> router__//example.com');
    expect(parts.every(part => !part.route)).toBe(true);
    expect(parts.map(part => part.text).join('')).toBe('<script>alert(1)</script> router__//example.com');
  });
});
