import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ChatRoomAddRequest, ChatRoomEditRequest, ChatRoomMessageCursorResponse, ChatRoomMessageResponse, GlobalChatRoomResponse, Message, MessageQueryParams } from '../../../shared/interfaces/chat';
import { CursorQueryParams } from '../../../shared/interfaces/pagination';
import { ReactionEmojiRequest, Reaction, ReactionWithAuthorCursorResponse } from '../../../shared/interfaces/reaction';
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

  addChatRoomMessage(chatRoomId: number, body: ChatRoomAddRequest) {
    return this.httpClient.post<Message>(`${this.baseApiUrl}/${chatRoomId}/message/add`, body);
  }

  editChatRoomMessage(chatRoomId: number, body: ChatRoomEditRequest) {
    return this.httpClient.patch<Message>(`${this.baseApiUrl}/${chatRoomId}/message/edit`, body);
  }

  deleteChatRoomMessage(chatRoomId: number, messageId: number) {
    return this.httpClient.delete<void>(`${this.baseApiUrl}/${chatRoomId}/message/${messageId}/delete`);
  }

  addChatRoomMessageReaction(messageId: number, body: ReactionEmojiRequest) {
    return this.httpClient.post<Reaction>(`${this.baseApiUrl}/message/${messageId}/reaction/add`, body);
  }

  getChatRoomMessageReactions(chatRoomId: number, messageId: number, params: CursorQueryParams & { emoji?: string }) {
    return this.httpClient.get<ReactionWithAuthorCursorResponse>(`${this.baseApiUrl}/${chatRoomId}/message/${messageId}/reaction/all`, { params: toHttpParams(params) });
  }
}
