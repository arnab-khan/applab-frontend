import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScroll } from './infinite-scroll';

class MockIntersectionObserver {
  static instance?: MockIntersectionObserver;

  callback: IntersectionObserverCallback;
  observe = jasmine.createSpy('observe');
  disconnect = jasmine.createSpy('disconnect');

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instance = this;
  }

  trigger(entry: Partial<IntersectionObserverEntry>) {
    this.callback([entry as IntersectionObserverEntry], this as unknown as IntersectionObserver);
  }
}

@Component({
  standalone: true,
  imports: [InfiniteScroll],
  template: `
    <app-infinite-scroll [loading]="loading" (reachedEnd)="onReachedEnd()">
      <div>Projected content</div>
    </app-infinite-scroll>
  `,
})
class HostComponent {
  loading = false;
  reachedEndCount = 0;

  onReachedEnd() {
    this.reachedEndCount++;
  }
}

describe('InfiniteScroll', () => {
  let fixture: ComponentFixture<HostComponent>;
  let originalIntersectionObserver: typeof IntersectionObserver;

  beforeEach(async () => {
    originalIntersectionObserver = globalThis.IntersectionObserver;
    globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIntersectionObserver;
    MockIntersectionObserver.instance = undefined;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should emit when the sentinel enters the viewport', () => {
    MockIntersectionObserver.instance?.trigger({ isIntersecting: true });

    expect(fixture.componentInstance.reachedEndCount).toBe(1);
  });

  it('should not emit repeatedly until the sentinel exits', () => {
    MockIntersectionObserver.instance?.trigger({ isIntersecting: true });
    MockIntersectionObserver.instance?.trigger({ isIntersecting: true });

    expect(fixture.componentInstance.reachedEndCount).toBe(1);

    MockIntersectionObserver.instance?.trigger({ isIntersecting: false });
    MockIntersectionObserver.instance?.trigger({ isIntersecting: true });

    expect(fixture.componentInstance.reachedEndCount).toBe(2);
  });
}
