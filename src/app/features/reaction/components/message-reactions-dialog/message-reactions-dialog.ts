import { Component, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogHeader } from '../../../../shared/components/dialogs/dialog-header/dialog-header';
import { ReactionList } from '../reaction-list/reaction-list';

@Component({
  selector: 'app-message-reactions-dialog',
  imports: [MatDialogModule, DialogHeader, ReactionList],
  templateUrl: './message-reactions-dialog.html',
  styleUrl: './message-reactions-dialog.scss',
})
export class MessageReactionsDialog {
  readonly data = inject<{ chatRoomId: number; messageId: number }>(MAT_DIALOG_DATA);
}
