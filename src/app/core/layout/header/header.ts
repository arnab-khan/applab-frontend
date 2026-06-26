import { afterNextRender, Component, effect, ElementRef, inject, Injector, OnDestroy, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Auth } from '../../services/auth';
import { PORTFOLIO_URL } from '../../../shared/config/config';
import { Thumbnail } from '../../../shared/components/media/thumbnail/thumbnail';
import { FormattedText } from '../../../shared/components/text/formatted-text/formatted-text';
import { CapitalizeWordsPipe } from '../../../shared/pipes/capitalize-words-pipe';
import { LayoutState } from '../../services/layout-state';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgTemplateOutlet, Thumbnail, FormattedText, CapitalizeWordsPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  private authService = inject(Auth);
  private elementRef = inject(ElementRef<HTMLElement>);
  private layoutState = inject(LayoutState);
  private injector = inject(Injector);
  private resizeObserver?: ResizeObserver;

  authState = this.authService.authState;
  profileState = this.authService.profileState;
  portfolioUrl = signal(PORTFOLIO_URL);

  constructor() {
    effect(() => {
      if (!this.authState().completed) {
        return;
      }
      afterNextRender(() => this.observeHeaderHeight(), { injector: this.injector });
    });
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  private observeHeaderHeight() {
    this.resizeObserver?.disconnect();
    const headerElement = this.elementRef.nativeElement.parentElement || this.elementRef.nativeElement;
    this.setHeaderHeight(headerElement);
    this.resizeObserver = new ResizeObserver(() => this.setHeaderHeight(headerElement));
    this.resizeObserver.observe(headerElement);
  }

  private setHeaderHeight(headerElement: HTMLElement) {
    this.layoutState.headerHeight.set(headerElement.getBoundingClientRect().height);
  }
}
