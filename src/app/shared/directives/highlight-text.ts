import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
  standalone: true,
})
export class HighlightText implements AfterViewInit, OnChanges {
  @Input('appHighlightText') highlightText = '';
  @Input() highlightClass = 'bg-yellow-200 text-inherit [font:inherit] rounded';

  private originalText = '';
  private initialized = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.originalText = this.el.nativeElement.textContent ?? '';
    this.initialized = true;
    this.applyHighlight();
  }

  ngOnChanges(_: SimpleChanges): void {
    if (this.initialized) {
      this.applyHighlight();
    }
  }

  private applyHighlight(): void {
    const host = this.el.nativeElement;
    const sourceText = this.originalText || host.textContent || '';
    const term = (this.highlightText || '').trim();

    while (host.firstChild) {
      this.renderer.removeChild(host, host.firstChild);
    }

    if (!term) {
      this.renderer.appendChild(host, this.renderer.createText(sourceText));
      return;
    }

    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedTerm, 'gi');
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(sourceText)) !== null) {
      const matchIndex = match.index;

      if (matchIndex > lastIndex) {
        this.renderer.appendChild(host, this.renderer.createText(sourceText.slice(lastIndex, matchIndex)));
      }

      const mark = this.renderer.createElement('mark');
      this.renderer.setAttribute(mark, 'class', this.highlightClass);
      this.renderer.appendChild(mark, this.renderer.createText(match[0]));
      this.renderer.appendChild(host, mark);

      lastIndex = matchIndex + match[0].length;
    }

    if (lastIndex < sourceText.length) {
      this.renderer.appendChild(host, this.renderer.createText(sourceText.slice(lastIndex)));
    }
  }

}
