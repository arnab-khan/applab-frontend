import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef, effect, inject, input, signal } from '@angular/core';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-viewer',
  imports: [NgClass, NgStyle, OverlayModule, FontAwesomeModule],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.scss',
})
export class ImageViewer {
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  @ViewChild('triggerButton', { read: ElementRef }) triggerButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('viewerTemplate') viewerTemplate!: TemplateRef<unknown>;
  private overlayRef?: OverlayRef;
  private viewerStartStyle: Record<string, string> = {};
  private viewerEndStyle: Record<string, string> = {};

  readonly viewerState = signal<'closed' | 'opening' | 'open' | 'closing'>('closed');
  readonly imageLoading = signal(false);
  readonly imageFailed = signal(false);
  readonly boxStyle = signal<Record<string, string>>({});
  readonly faXmark = faXmark;

  imageUrl = input<string | null | undefined>(null);
  alt = input('Image');
  initialBorderRadius = input('10%');

  constructor() {
    effect(() => {
      if (this.imageUrl()) {
        this.imageLoading.set(true);
        this.imageFailed.set(false);
        return;
      }

      this.imageLoading.set(false);
      this.imageFailed.set(false);
    });
  }

  onImageLoad() {
    this.imageLoading.set(false);
  }

  onImageError() {
    this.imageLoading.set(false);
    this.imageFailed.set(true);
  }

  openViewer() {
    const rect = this.triggerButton?.nativeElement.getBoundingClientRect();
    const startStyle = {
      left: `${rect?.left}px`,
      top: `${rect?.top}px`,
      width: `${rect?.width ?? 0}px`,
      height: `${rect?.height ?? 0}px`,
      borderRadius: this.initialBorderRadius(),
      transform: 'translate(0, 0)',
    };
    const endStyle = {
      left: '50%',
      top: '50%',
      width: '18rem',
      height: '18rem',
      transform: 'translate(-50%, -50%)',
    };
    this.viewerStartStyle = startStyle;
    this.viewerEndStyle = endStyle;

    this.overlayRef?.dispose();
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global(),
    });

    this.overlayRef.backdropClick().subscribe(() => this.closeViewer());
    this.overlayRef.attach(new TemplatePortal(this.viewerTemplate, this.viewContainerRef));
    this.viewerState.set('opening');
    this.boxStyle.set({ ...startStyle, width: '0px', height: '0px' });

    requestAnimationFrame(() => {
      this.boxStyle.set(this.viewerStartStyle);

      requestAnimationFrame(() => {
        this.boxStyle.set(this.viewerEndStyle);
        window.setTimeout(() => {
          this.viewerState.set('open');
        }, 200);
      });
    });
  }

  closeViewer() {
    if (!this.overlayRef) {
      this.viewerState.set('closed');
      return;
    }

    this.viewerState.set('closing');
    this.boxStyle.set(this.viewerStartStyle);

    window.setTimeout(() => {
      this.overlayRef?.dispose();
      this.overlayRef = undefined;
      this.viewerState.set('closed');
    }, 200);
  }
}
