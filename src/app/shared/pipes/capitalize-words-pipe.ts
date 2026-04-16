import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeWords',
  standalone: true,
})
export class CapitalizeWordsPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';

    const trimmed = value.trim();
    if (!trimmed) return '';

    return trimmed.replace(/\b\p{L}/gu, match => match.toLocaleUpperCase());
  }
}
