import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.scss',
})
export class ComingSoon {
  faClock = faClock;
  faRocket = faRocket;
}
