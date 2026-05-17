import { CursorQueryParams, CursorResponse } from './pagination';
import { ReactionCount } from './reaction';
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
    author?: Author;
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

export interface MessageQueryParams extends CursorQueryParams {
    parentId?: number;
    deleted?: boolean;
}

export interface ChatRoomRequest {
    content: string;
    parentId?: number;
}

export interface ChatRoomMessageResponse {
    chatRoomId: number;
    message: Message;
    author?: Author;
    permission?: MessagePermission;
    reactions?: ReactionCount[];
}

export type ChatRoomMessageCursorResponse = CursorResponse<ChatRoomMessageResponse>;
