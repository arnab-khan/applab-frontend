import { inject, Injectable } from '@angular/core';
import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import { WebsocketSubscription } from '../../shared/interfaces/websocket';
import { environment } from '../../../environments/environment';
import { Telemetry } from './telemetry';
import { Platform } from '../../shared/services/platform';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private telemetry = inject(Telemetry);
  private platform = inject(Platform);

  readonly appDestination = '/app';
  readonly topicDestination = '/topic';

  private stompClient?: Client;
  private subscriptions: WebsocketSubscription[] = [];
  private reconnecting = false;
  private pendingReconnect = false;
  private collectedFailureKeys = new Set<string>();

  // Open the websocket connection if it is not already active.
  connect(): void {
    if (this.platform.isServer()) {
      return;
    }

    if (this.stompClient?.active) {
      return;
    }

    const brokerURL = `${environment.rootApiUrl.replace(/^http/, 'ws')}/ws`;

    this.stompClient = new Client({
      brokerURL,
      reconnectDelay: 3000,
      onConnect: () => {
        // STOMP subscriptions are lost after reconnect, so attach the active ones again.
        this.subscriptions.forEach((subscription) => this.subscribeStomp(subscription));
      },
      onStompError: (frame) => this.collectWebsocketFailureTelemetry('stomp_error', frame, brokerURL),
      onWebSocketError: (event) => this.collectWebsocketFailureTelemetry('websocket_error', event, brokerURL),
      onWebSocketClose: (event) => this.collectWebsocketFailureTelemetry('websocket_close', event, brokerURL),
    });

    this.stompClient.activate();
  }

  // Recreate the websocket connection and restore active subscriptions.
  reconnect(): void {
    if (this.reconnecting) {
      this.pendingReconnect = true;
      return;
    }

    if (!this.stompClient?.active) {
      this.connect();
      return;
    }

    this.reconnecting = true;
    const currentClient = this.stompClient;
    this.subscriptions.forEach((subscription) => subscription.stompSubscription = undefined);
    currentClient.deactivate().then(() => {
      // Create a fresh connection so updated cookies/session state are used in the handshake.
      if (this.stompClient === currentClient) {
        this.stompClient = undefined;
      }
      this.reconnecting = false;
      if (this.pendingReconnect) {
        this.pendingReconnect = false;
        this.reconnect();
        return;
      }
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

  private collectWebsocketFailureTelemetry(name: string, error: Event | IFrame, brokerURL: string): void {
    const details = {
      brokerURL,
      ...this.getWebsocketFailureDetails(error),
    };
    const failureKey = JSON.stringify({ name, details });

    if (this.collectedFailureKeys.has(failureKey)) {
      return;
    }

    this.collectedFailureKeys.add(failureKey);
    this.telemetry.collectActivity({
      name,
      type: 'WEBSOCKET_ERROR',
      activity: {
        message: this.getWebsocketFailureMessage(error),
        details,
      },
    });
  }

  private getWebsocketFailureMessage(error: Event | IFrame): string {
    if ('headers' in error) {
      return error.headers['message'] || error.command || 'STOMP websocket error';
    }

    return error.type || 'Websocket error';
  }

  private getWebsocketFailureDetails(error: Event | IFrame): Record<string, unknown> {
    if ('headers' in error) {
      return {
        command: error.command,
        headers: error.headers,
        body: error.body,
      };
    }

    return {
      type: error.type,
      code: 'code' in error ? error.code : undefined,
      reason: 'reason' in error ? error.reason : undefined,
      wasClean: 'wasClean' in error ? error.wasClean : undefined,
    };
  }
}
