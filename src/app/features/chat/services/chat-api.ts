import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ChatRoomMessageCursorResponse, ChatRoomRequest, Message, MessageQueryParams } from '../../../shared/interfaces/chat';
import { toHttpParams } from '../../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class ChatApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/chatroom`;

  getGlobalMessages(params: MessageQueryParams) {
    return this.httpClient.get<ChatRoomMessageCursorResponse>(`${this.baseApiUrl}/global/message/all`, { params: toHttpParams(params) });
  }

  addGlobalMessage(body: ChatRoomRequest) {
    return this.httpClient.post<Message>(`${this.baseApiUrl}/global/message/add`, body);
  }
}
