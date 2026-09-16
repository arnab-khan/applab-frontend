export interface AiChatMessage {
  role: 'USER' | 'ASSISTANT';
  message: string;
}

export interface AiPageSelectionRequest {
  aiSessionId: string;
  message: string;
  currentRoute: string;
  history: string;
}

export interface AiStreamResponse {
  message: string;
  history?: string;
}

export interface AiChatSession {
  aiSessionId: string;
  aiModel: string;
  chatCount: number;
  firstMessageAt: string;
  lastMessageAt: string;
}

export interface AiChatRecord {
  id: number;
  aiSessionId: string;
  aiModel: string;
  userId: number | null;
  userMessage: string;
  assistantResponse: string;
  historyResponse: string;
  currentRoute: string | null;
  createdAt: string;
  user?: import('./user').User;
}
