import { Directive, ElementRef, HostListener } from '@angular/core';

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
        this.el.nativeElement.querySelector(
          '.ng-invalid'
        );
      console.log(firstInvalidControl);

      if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        firstInvalidControl.focus({ preventScroll: true });
      }
    });
  }

}
