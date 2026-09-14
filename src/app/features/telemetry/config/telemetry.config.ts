import { TelemetryActivityType } from '../../../shared/interfaces/telemetry';

export const TELEMETRY_ACTIVITY_TYPES: {
  value: TelemetryActivityType | null;
  label: string;
  options?: { value: boolean | null; label: string }[];
}[] = [
  { value: null, label: 'All action types' },
  { value: 'CLICK', label: 'Clicks' },
  {
    value: 'API_CALL',
    label: 'API calls',
    options: [
      { value: null, label: 'All API results' },
      { value: true, label: 'Successful' },
      { value: false, label: 'Failed' },
    ],
  },
  { value: 'ROUTER_CHANGE', label: 'Navigation' },
  { value: 'ERROR', label: 'Errors' },
  { value: 'WEBSOCKET_ERROR', label: 'Connection errors' },
  { value: 'NETWORK_ERROR', label: 'Internet connection errors' },
  { value: 'NETWORK_RESTORED', label: 'Internet connections restored' },
];
