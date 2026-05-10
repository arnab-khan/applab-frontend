import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatState {
  messageCount = signal<number | undefined>(undefined);
}