import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-connection-list-button',
  imports: [FontAwesomeModule],
  templateUrl: './connection-list-button.html',
  styleUrl: './connection-list-button.scss',
})
export class ConnectionListButton {
  userId = input.required<number>();
  readonly faUsers = faUsers;
}
