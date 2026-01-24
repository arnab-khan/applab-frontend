import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appSanitizeInput]',
})
export class SanitizeInput {

  @Input() noSpaceAllow = false;
  @Input() consecutiveSpaceNotAllow = true;

  constructor(
    private ngControl: NgControl
  ) { }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = target?.value;

    if (!value) {
      return;
    }

    value = value.replace(/\p{Extended_Pictographic}(\u200D\p{Extended_Pictographic})*/gu, ''); // Remove emojis

    if (!this.noSpaceAllow) {
      value = value.replace(/^\s+/g, ''); // Remove leading spaces
      if (this.consecutiveSpaceNotAllow) {
        value = value.replace(/\s{2,}/g, ' '); // Remove consecutive spaces
      }
    } else {
      value = value.replace(/\s/g, ''); // Remove space
    }

    // Update the form control's value  
    if (value !== this.ngControl?.control?.value) {
      this.ngControl?.control?.patchValue(value);
    }
  }

}
