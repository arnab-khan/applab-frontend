import { Component, effect, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { Platform } from '../../../services/platform';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.html',
  styleUrl: './infinite-scroll.scss',
})
export class InfiniteScroll {
  private platform = inject(Platform);

  readonly topSentinel = viewChild<ElementRef<HTMLElement>>('topSentinel');
  readonly bottomSentinel = viewChild<ElementRef<HTMLElement>>('bottomSentinel');

  readonly loading = input(false);
  readonly reachedStart = output<void>();
  readonly reachedEnd = output<void>();

  private hasTriggeredStartSinceExit = false;
  private hasTriggeredEndSinceExit = false;
  private lastTriggeredDirection: 'start' | 'end' | null = null;

  isLoadingStart() {
    return this.loading() && this.lastTriggeredDirection === 'start';
  }

  isLoadingEnd() {
    return this.loading() && this.lastTriggeredDirection !== 'start';
  }

  constructor() {
    effect((onCleanup) => {
      if (!this.platform.isBrowser()) {
        return;
      }

      const topTarget = this.topSentinel()?.nativeElement;
      const bottomTarget = this.bottomSentinel()?.nativeElement;

      if (!topTarget || !bottomTarget) {
        return;
      }

      // Watch both sentinels and emit before they reach the visible viewport edge.
      const topObserver = this.createScrollObserver('start', '200px 0px 0px 0px');
      const bottomObserver = this.createScrollObserver('end', '0px 0px 200px 0px');

      topObserver.observe(topTarget);
      bottomObserver.observe(bottomTarget);

      onCleanup(() => {
        topObserver.disconnect();
        bottomObserver.disconnect();
      });
    });
  }

  private createScrollObserver(direction: 'start' | 'end', rootMargin: string) {
    return new IntersectionObserver(
      // `entry` describes how much the sentinel is intersecting with the viewport.
      ([entry]) => {
        if (!entry) {
          return;
        }

        // When the marker is not visible (not inside the trigger zone anymore), so the infinite scroll can trigger again later when the sentinel enters the trigger zone again.
        if (!entry.isIntersecting) {
          this.setHasTriggeredSinceExit(direction, false);
          return;
        }

        if (this.getHasTriggeredSinceExit(direction) || this.loading()) {
          return;
        }

        this.setHasTriggeredSinceExit(direction, true);
        this.lastTriggeredDirection = direction;
        this.emitReached(direction);
      },
      {
        // Use the main page scroll, trigger about 200px before the sentinel reaches the viewport,
        // and fire as soon as any part of the sentinel enters that area.
        root: null,
        rootMargin,
        threshold: 0,
      },
    );
  }

  private getHasTriggeredSinceExit(direction: 'start' | 'end') {
    return direction === 'start'
      ? this.hasTriggeredStartSinceExit
      : this.hasTriggeredEndSinceExit;
  }

  private setHasTriggeredSinceExit(direction: 'start' | 'end', value: boolean) {
    if (direction === 'start') {
      this.hasTriggeredStartSinceExit = value;
      return;
    }

    this.hasTriggeredEndSinceExit = value;
  }

  private emitReached(direction: 'start' | 'end') {
    if (direction === 'start') {
      this.reachedStart.emit();
      return;
    }

    this.reachedEnd.emit();
  }
}
