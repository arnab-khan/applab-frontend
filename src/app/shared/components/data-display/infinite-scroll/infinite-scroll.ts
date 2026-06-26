import { NgClass } from '@angular/common';
import { Component, effect, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { Platform } from '../../../services/platform';

@Component({
  selector: 'app-infinite-scroll',
  imports: [NgClass],
  templateUrl: './infinite-scroll.html',
  styleUrl: './infinite-scroll.scss',
})
export class InfiniteScroll {
  private platform = inject(Platform);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly topSentinel = viewChild<ElementRef<HTMLElement>>('topSentinel');
  readonly bottomSentinel = viewChild<ElementRef<HTMLElement>>('bottomSentinel');

  readonly loadingStart = input(false);
  readonly loadingEnd = input(false);
  readonly disabled = input(false);
  readonly useElementScroll = input(false);
  readonly spinnerClass = input('');
  readonly reachedStart = output<void>();
  readonly reachedEnd = output<void>();

  private hasTriggeredStartSinceExit = false;
  private hasTriggeredEndSinceExit = false;

  isLoadingStart() {
    return this.loadingStart();
  }

  isLoadingEnd() {
    return this.loadingEnd();
  }

  constructor() {
    effect((onCleanup) => {
      if (!this.platform.isBrowser()) {
        return;
      }

      if (this.disabled()) {
        this.hasTriggeredStartSinceExit = false;
        this.hasTriggeredEndSinceExit = false;
        return;
      }

      const topTarget = this.topSentinel()?.nativeElement;
      const bottomTarget = this.bottomSentinel()?.nativeElement;
      const root = this.useElementScroll() ? this.elementRef.nativeElement : null;

      if (!topTarget || !bottomTarget) {
        return;
      }

      // Watch both sentinels and emit before they reach the visible viewport edge.
      const topObserver = this.createScrollObserver('start', '200px 0px 0px 0px', root);
      const bottomObserver = this.createScrollObserver('end', '0px 0px 200px 0px', root);

      topObserver.observe(topTarget);
      bottomObserver.observe(bottomTarget);

      onCleanup(() => {
        topObserver.disconnect();
        bottomObserver.disconnect();
      });
    });
  }

  private createScrollObserver(
    direction: 'start' | 'end',
    rootMargin: string,
    root: HTMLElement | null,
  ) {
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

        if (this.getHasTriggeredSinceExit(direction) || this.isLoadingDirection(direction)) {
          return;
        }

        this.setHasTriggeredSinceExit(direction, true);
        this.emitReached(direction);
      },
      {
        // Trigger about 200px before the sentinel reaches the scroll boundary,
        // and fire as soon as any part of the sentinel enters that area.
        root,
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

  private isLoadingDirection(direction: 'start' | 'end') {
    return direction === 'start'
      ? this.loadingStart()
      : this.loadingEnd();
  }

  private emitReached(direction: 'start' | 'end') {
    if (direction === 'start') {
      this.reachedStart.emit();
      return;
    }

    this.reachedEnd.emit();
  }
}
