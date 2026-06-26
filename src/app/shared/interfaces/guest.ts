export interface GuestExistsResponse {
  exists: boolean;
  guestSessionId?: number;
}

export interface GuestCreateResponse {
  guestSessionId?: number;
}
