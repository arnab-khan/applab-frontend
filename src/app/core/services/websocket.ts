import { Injectable } from '@angular/core';
import { Client, IMessage, StompSubscription } from '@stomp/stompjs';
import { WebsocketSubscription } from '../../shared/interfaces/websocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  readonly appDestination = '/app';
  readonly topicDestination = '/topic';

  private stompClient?: Client;
  private subscriptions: WebsocketSubscription[] = [];

  // Open the websocket connection if it is not already active.
  connect(): void {
    if (this.stompClient?.active) {
      return;
    }

    this.stompClient = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 3000,
      onConnect: () => {
        // STOMP subscriptions are lost after reconnect, so attach the active ones again.
        this.subscriptions.forEach((subscription) => this.subscribeStomp(subscription));
      }
    });

    this.stompClient.activate();
  }

  // Recreate the websocket connection and restore active subscriptions.
  reconnect(): void {
    if (!this.stompClient?.active) {
      this.connect();
      return;
    }

    this.subscriptions.forEach((subscription) => subscription.stompSubscription?.unsubscribe());
    this.stompClient.deactivate().then(() => {
      // Create a fresh connection so updated cookies/session state are used in the handshake.
      this.stompClient = undefined;
      this.connect();
    });
  }

  // Subscribe to a topic and keep enough data to resubscribe after reconnect.
  subscribe<T>(
    topic: string,
    callback: (data: T) => void
  ): StompSubscription {
    if (!this.stompClient?.active) {
      this.connect();
    }

    const subscription: WebsocketSubscription = {
      topic,
      active: true,
      // Keep the message handler so reconnect can resubscribe without the caller wiring it again.
      callback: (message: IMessage) => {
        const parsedData = JSON.parse(message.body) as T;
        callback(parsedData);
      },
    };

    this.subscriptions.push(subscription);

    if (this.stompClient?.connected) {
      this.subscribeStomp(subscription);
    }

    return {
      id: topic,
      unsubscribe: () => {
        subscription.active = false;
        subscription.stompSubscription?.unsubscribe();
        this.subscriptions = this.subscriptions.filter((item) => item !== subscription);
      }
    };
  }

  // Send a message to an application destination.
  publish(
    destination: string,
    body: any
  ): void {

    this.stompClient?.publish({
      destination,
      body: JSON.stringify(body)
    });
  }

  // Attach one stored subscription to the current STOMP connection.
  private subscribeStomp(subscription: WebsocketSubscription): void {
    if (!subscription.active || !this.stompClient?.connected) {
      return;
    }

    subscription.stompSubscription?.unsubscribe();
    subscription.stompSubscription = this.stompClient.subscribe(
      subscription.topic,
      subscription.callback
    );
  }
}
