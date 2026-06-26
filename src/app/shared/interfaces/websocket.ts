import { IMessage, StompSubscription } from '@stomp/stompjs';

export interface WebsocketSubscription {
  topic: string;
  active: boolean;
  callback: (message: IMessage) => void;
  stompSubscription?: StompSubscription;
}
