import { Component, inject, input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { ConnectionListDialog } from '../connection-list-dialog/connection-list-dialog';

@Component({
  selector: 'app-connection-list-button',
  imports: [FontAwesomeModule, MatDialogModule],
  templateUrl: './connection-list-button.html',
  styleUrl: './connection-list-button.scss',
})
export class ConnectionListButton {
  private readonly dialog = inject(MatDialog);

  userId = input.required<number>();
  readonly faUsers = faUsers;

  openConnectionsDialog() {
    this.dialog.open(ConnectionListDialog, {
      width: '40rem',
      maxWidth: '95vw',
      height: '80dvh',
      data: { userId: this.userId() },
    });
  }
}
