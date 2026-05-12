import { Injectable } from '@angular/core';
import { Client, IMessage, StompSubscription } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private stompClient!: Client;
  // Subscriptions requested before the socket connects are replayed in onConnect.
  private pendingSubscriptions: (() => void)[] = [];

  connect(): void {
    if (this.stompClient?.active) {
      return;
    }

    this.stompClient = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 5000,
      onConnect: () => {
        // Copy first so subscriptions added while replaying stay queued for the next connect.
        const subscriptions = [...this.pendingSubscriptions];
        this.pendingSubscriptions = [];
        subscriptions.forEach((subscribe) => subscribe());
      }
    });

    this.stompClient.activate();
  }

  subscribe<T>(
    topic: string,
    callback: (data: T) => void
  ): StompSubscription {
    if (!this.stompClient?.active) {
      this.connect();
    }

    let active = true;
    let stompSubscription: StompSubscription | undefined;

    // Keep subscription creation reusable because STOMP may still be connecting.
    const subscribe = () => {
      if (!active) {
        return;
      }

      stompSubscription = this.stompClient.subscribe(
        topic,
        (message: IMessage) => {

          const parsedData =
            JSON.parse(message.body) as T;

          callback(parsedData);
        }
      );
    };

    if (this.stompClient.connected) {
      subscribe();
    } else {
      this.pendingSubscriptions.push(subscribe);
    }

    return {
      id: topic,
      unsubscribe: () => {
        // Mark inactive so a queued subscription cannot attach after the caller unsubscribes.
        active = false;
        stompSubscription?.unsubscribe();
      }
    };
  }

  publish(
    destination: string,
    body: any
  ): void {

    this.stompClient.publish({
      destination,
      body: JSON.stringify(body)
    });
  }
}
