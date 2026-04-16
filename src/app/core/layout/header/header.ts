import { Component, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Auth } from '../../services/auth';
import { PORTFOLIO_URL } from '../../../shared/config/config';
import { Thumbnail } from '../../../shared/components/media/thumbnail/thumbnail';
import { FormattedText } from '../../../shared/components/text/formatted-text/formatted-text';
import { CapitalizeWordsPipe } from '../../../shared/pipes/capitalize-words-pipe';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgTemplateOutlet, Thumbnail, FormattedText, CapitalizeWordsPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private authService = inject(Auth);
  authState = this.authService.authState;
  profileState = this.authService.profileState;
  portfolioUrl = signal(PORTFOLIO_URL);
}
