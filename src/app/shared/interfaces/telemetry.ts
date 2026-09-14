import { PageResponse, PaginationQueryParams } from './pagination';
import { User } from './user';

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

export interface TelemetryLocalSession {
  localSessionId: string;
  identityType: TelemetryIdentityType;
  identityId: number | null;
  browser: string;
  platform: string;
  activityCount: number;
  firstSeenAt: string;
  lastSeenAt: string;
}

export interface TelemetryEvent extends TelemetryPayload {
  id: number;
  createdAt: string;
  user?: User;
}

export interface TelemetryQueryParams extends PaginationQueryParams {
  localSessionId?: string;
  type?: TelemetryActivityType;
  success?: boolean;
}

export type TelemetryPageResponse = PageResponse<TelemetryEvent>;
export type TelemetryLocalSessionPageResponse = PageResponse<TelemetryLocalSession>;
