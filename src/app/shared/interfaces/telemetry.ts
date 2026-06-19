export type TelemetryActivity = Record<string, unknown>;
export type TelemetryActivityType = 'CLICK' | 'API_CALL' | 'ROUTER_CHANGE';
export type TelemetryIdentityType = 'USER' | 'GUEST' | 'SESSION';

export interface TelemetryIdentity {
  type: TelemetryIdentityType;
  id: number | string;
}

export interface TelemetryPayload {
  name: string;
  type: TelemetryActivityType;
  activity: TelemetryActivity;
  identity: TelemetryIdentity;
  route: string;
  userAgent: string;
}

export interface CollectActivityParams {
  name: string;
  type: TelemetryActivityType;
  activity: TelemetryActivity;
}
