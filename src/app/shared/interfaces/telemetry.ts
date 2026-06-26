export type TelemetryActivity = Record<string, unknown>;
export type TelemetryActivityType = 'CLICK' | 'API_CALL' | 'ROUTER_CHANGE' | 'ERROR' | 'WEBSOCKET_ERROR';
export type TelemetryIdentityType = 'USER' | 'GUEST' | 'ANONYMOUS';

export interface TelemetryPayload {
  name: string;
  type: TelemetryActivityType;
  activity: TelemetryActivity;
  localSessionId: string;
  identityType: TelemetryIdentityType;
  identityId?: number;
  route: string;
  browser: string;
  platform: string;
}

export interface CollectActivityParams {
  name: string;
  type: TelemetryActivityType;
  activity: TelemetryActivity;
}
