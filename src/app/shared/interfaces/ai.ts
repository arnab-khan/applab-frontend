export interface AiChatMessage {
  role: 'USER' | 'ASSISTANT';
  message: string;
}

export interface AiPageSelectionRequest {
  message: string;
  currentRoute: string;
  userType: 'LOGGED_IN' | 'GUEST';
  history: AiChatMessage[];
}
