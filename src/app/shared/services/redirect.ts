import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POST_LOGIN_DEFAULT_ROUTE } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class Redirect {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  postLogin() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    return this.router.navigateByUrl(returnUrl || POST_LOGIN_DEFAULT_ROUTE);
  }
}
