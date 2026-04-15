import { Component, effect, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { Platform } from '../../../services/platform';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.html',
  styleUrl: './infinite-scroll.scss',
})
export class InfiniteScroll {
  private platform = inject(Platform);

  readonly sentinel = viewChild<ElementRef<HTMLElement>>('sentinel');

  readonly loading = input(false);
  readonly reachedEnd = output<void>();

  private hasTriggeredSinceExit = false;

  constructor() {
    effect((onCleanup) => {
      if (!this.platform.isBrowser()) {
        return;
      }

      const target = this.sentinel()?.nativeElement;

      if (!target) {
        return;
      }

      // Watch the bottom sentinel and emit before it reaches the visible viewport end.
      const observer = new IntersectionObserver(
        // `entry` describes how much the sentinel is intersecting with the viewport.
        ([entry]) => {
          if (!entry) {
            return;
          }

          if (!entry.isIntersecting) {
            this.hasTriggeredSinceExit = false;
            return;
          }

          if (this.hasTriggeredSinceExit || this.loading()) {
            return;
          }

          this.hasTriggeredSinceExit = true;
          this.reachedEnd.emit();
        },
        {
          // Use the main page scroll, trigger about 200px before the sentinel reaches the viewport,
          // and fire as soon as any part of the sentinel enters that area.
          root: null,
          rootMargin: '0px 0px 200px 0px',
          threshold: 0,
        },
      );

      observer.observe(target);

      onCleanup(() => observer.disconnect());
    });
  }
}
