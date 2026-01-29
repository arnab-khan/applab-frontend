import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';

    const trimmed = value.trim();
    if (!trimmed) return '';

    return trimmed
      .toLocaleLowerCase()
      .replace(/(^\p{L}|[.!?]\s*\p{L})/gu, match =>
        match.toLocaleUpperCase()
      );
  }

}
