import { CapitalizeWordsPipe } from './capitalize-words-pipe';

describe('CapitalizeWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeWordsPipe();
    expect(pipe).toBeTruthy();
  });

  it('capitalizes the first letter of each word and preserves the rest', () => {
    const pipe = new CapitalizeWordsPipe();

    expect(pipe.transform('hELLo woRLD')).toBe('HELLo WoRLD');
  });

  it('returns an empty string for empty values', () => {
    const pipe = new CapitalizeWordsPipe();

    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});
