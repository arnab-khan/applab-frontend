export interface AiChatMessage {
  role: 'USER' | 'ASSISTANT';
  message: string;
}

export interface AiPageSelectionRequest {
  message: string;
  currentRoute: string;
  history: string;
}

export interface AiStreamResponse {
  message: string;
  history?: string;
}
