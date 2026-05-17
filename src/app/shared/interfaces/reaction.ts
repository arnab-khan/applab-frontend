export interface ReactionEmojiRequest {
  emoji: string;
}

export interface ReactionModel {
  id: number;
  emoji: string;
}

export interface ReactionCount {
  emoji: string;
  count: number;
}
