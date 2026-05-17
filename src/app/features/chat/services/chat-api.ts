import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ChatRoomMessageCursorResponse, ChatRoomRequest, GlobalChatRoomResponse, Message, MessageQueryParams } from '../../../shared/interfaces/chat';
import { ReactionEmojiRequest, ReactionModel } from '../../../shared/interfaces/reaction';
import { toHttpParams } from '../../../shared/utils/http';

@Injectable({
  providedIn: 'root',
})
export class ChatApi {
  private httpClient = inject(HttpClient);
  private baseApiUrl = `${environment.rootApiUrl}/chatroom`;

  getGlobalChatRoom() {
    return this.httpClient.get<GlobalChatRoomResponse>(`${this.baseApiUrl}/global`);
  }

  getChatRoomMessages(chatRoomId: number, params: MessageQueryParams) {
    return this.httpClient.get<ChatRoomMessageCursorResponse>(`${this.baseApiUrl}/${chatRoomId}/message/all`, { params: toHttpParams(params) });
  }

  addChatRoomMessage(chatRoomId: number, body: ChatRoomRequest) {
    return this.httpClient.post<Message>(`${this.baseApiUrl}/${chatRoomId}/message/add`, body);
  }

  addChatRoomMessageReaction(messageId: number, body: ReactionEmojiRequest) {
    return this.httpClient.post<ReactionModel>(`${this.baseApiUrl}/message/${messageId}/reaction/add`, body);
  }
}
