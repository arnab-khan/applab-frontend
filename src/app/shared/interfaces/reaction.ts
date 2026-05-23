import { Author } from './author';
import { CursorResponse } from './pagination';

export interface ReactionEmojiRequest {
  emoji: string;
}

export interface Reaction {
  id: number;
  contextId?: number;
  contextType?: string;
  userId?: number;
  guestSessionId?: number;
  emoji: string;
  createdAt?: string;
}

export interface ReactionCount {
  emoji: string;
  count: number;
}

export interface ReactionWithAuthorResponse {
  reaction: Reaction;
  author: Author;
}

export interface ReactionWithAuthorCursorResponse extends CursorResponse<ReactionWithAuthorResponse> {
  reactions: ReactionCount[];
}
