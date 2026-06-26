import { AfterViewInit, Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'textarea[appAutoResizeTextarea]',
  standalone: true
})
export class AutoResizeTextarea implements AfterViewInit {

  constructor(
    private el: ElementRef<HTMLTextAreaElement>,
    @Optional() private ngControl?: NgControl
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.resize());
    this.ngControl?.valueChanges?.subscribe(() => {
      setTimeout(() => this.resize());
    });
  }

  @HostListener('input')
  onInput(): void {
    this.resize();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.resize();
  }

  private resize(): void {
    const textarea = this.el.nativeElement;
    textarea.style.height = 'auto';
    textarea.style.overflow = 'hidden';
    textarea.style.resize = 'none';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
