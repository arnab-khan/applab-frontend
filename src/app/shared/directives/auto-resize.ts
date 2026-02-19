import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'textarea[appAutoResizeTextarea]',
  standalone: true
})
export class AutoResizeTextarea implements AfterViewInit {

  constructor(
    private el: ElementRef<HTMLTextAreaElement>
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.resize());
  }

  @HostListener('input')
  onInput(): void {
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
