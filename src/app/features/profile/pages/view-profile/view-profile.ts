import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Auth } from '../../../../core/services/auth';
import { Thumbnail } from '../../../../shared/media/thumbnail/thumbnail';

@Component({
  selector: 'app-view-profile',
  imports: [DatePipe, Thumbnail],
  templateUrl: './view-profile.html',
  styleUrl: './view-profile.scss',
})
export class ViewProfile {
  private authService = inject(Auth);
  authState = this.authService.authState;
}
