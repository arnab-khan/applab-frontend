import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { sanitizeText } from '../utils/text-sanitize';

@Directive({
  selector: '[appSanitizeInput]',
})
export class SanitizeInput {

  @Input() noSpaceAllow = false;
  @Input() noSpecialCharacterAllow = false;
  @Input() consecutiveSpaceNotAllow = true;
  @Input() preventNewline = true;

  constructor(
    private ngControl: NgControl
  ) { }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target?.value;

    if (!value) {
      return;
    }

    const sanitizedValue = sanitizeText(value, {
      noSpaceAllow: this.noSpaceAllow,
      noSpecialCharacterAllow: this.noSpecialCharacterAllow,
      consecutiveSpaceNotAllow: this.consecutiveSpaceNotAllow,
      preventNewline: this.preventNewline,
    });

    // Update the form control's value  
    if (sanitizedValue !== this.ngControl?.control?.value) {
      this.ngControl?.control?.patchValue(sanitizedValue);
    }
  }

}
