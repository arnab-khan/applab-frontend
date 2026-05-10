import { DatePipe, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { ChatRoomMessageResponse } from '../../../../shared/interfaces/chat';

@Component({
  selector: 'app-message-item',
  imports: [DatePipe, FontAwesomeModule, NgClass],
  templateUrl: './message-item.html',
  styleUrl: './message-item.scss',
})
export class MessageItem {
  messageResponse = input.required<ChatRoomMessageResponse>();

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faUser = faUser;
}
