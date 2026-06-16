import { CursorQueryParams, CursorResponse } from './pagination';
import { Reaction, ReactionCount } from './reaction';
import { Author } from './author';

export interface GlobalChatRoomResponse {
    chatRoomId: number;
}

export interface Message {
    id: number;
    parentId?: number;
    quotedMessageId?: number;
    contextId: number;
    contextType: string;
    userId?: number;
    guestSessionId?: number;
    content?: string;
    deleted: boolean;
    edited: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface MessagePermission {
    canEdit: boolean;
    canDelete: boolean;
}

export interface MessageResponse {
    message: Message;
    author: Author;
    permission: MessagePermission;
}

export interface QuotedMessageResponse {
    message: Message;
    author?: Author;
}

export type MessageDirection = 'OLDER' | 'NEWER';

export interface MessageQueryParams extends CursorQueryParams {
    parentId?: number;
    deleted?: boolean;
    direction?: MessageDirection;
}

export interface ChatRoomAddRequest {
    content: string;
    parentId?: number;
    quotedMessageId?: number;
}

export interface ChatRoomEditRequest {
    id: number;
    content: string;
    removeQuotedMessage?: boolean;
}

export interface ChatRoomMessageResponse {
    chatRoomId: number;
    message: Message;
    quotedMessage?: QuotedMessageResponse;
    author?: Author;
    permission?: MessagePermission;
    reactions?: ReactionCount[];
    myReaction?: Reaction | null;
}

export interface ChatRoomMessageLiveResponse {
    action: string;
    message: ChatRoomMessageResponse;
}

export interface ChatRoomTypingResponse {
    chatRoomId: number;
    author: Author;
}

export type ChatRoomMessageCursorResponse = CursorResponse<ChatRoomMessageResponse>;
