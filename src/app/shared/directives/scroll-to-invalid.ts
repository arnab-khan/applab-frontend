import { Directive, ElementRef, HostListener } from '@angular/core';
import { isTouchDevice } from '../utils/device';

@Directive({
  selector: '[appScrollToInvalid]',
})
export class ScrollToInvalid {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('ngSubmit') // Listen to the ngSubmit event on the element where this directive is applied, and run this method when it happens
  onFormSubmit() {
    setTimeout(() => {
      const firstInvalidControl: HTMLElement =
        this.el.nativeElement.querySelector('.ng-invalid');
      if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        if (!isTouchDevice()) {
          firstInvalidControl.focus({ preventScroll: true });
        }
      }
    });
  }

}