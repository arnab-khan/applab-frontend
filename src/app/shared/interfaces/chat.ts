import { CursorQueryParams, CursorResponse } from './pagination';

export interface Message {
    id: number;
    parentId: number | null;
    contextId: number;
    contextType: string;
    userId: number | null;
    guestSessionId: number | null;
    content?: string;
    deleted: boolean;
    edited: boolean;
    author?: MessageAuthor;
    createdAt?: string;
    updatedAt?: string;
}

export interface MessageAuthor {
    type: string;
    id: number;
    name?: string;
    username?: string;
    profileImageUrl?: string | null;
    compressedProfileImageUrl?: string | null;
}

export interface MessagePermission {
    canEdit: boolean;
    canDelete: boolean;
}

export interface MessageResponse {
    message: Message;
    author: MessageAuthor;
    permission: MessagePermission;
}

export interface MessageQueryParams extends CursorQueryParams {
    parentId?: number;
    deleted?: boolean;
}

export interface ChatRoomRequest {
    content: string;
    parentId?: number | null;
}

export interface ChatRoomMessageResponse extends MessageResponse {
    chatRoomId: number;
}

export type ChatRoomMessageCursorResponse = CursorResponse<ChatRoomMessageResponse>;
