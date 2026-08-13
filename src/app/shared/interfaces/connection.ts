import { PageResponse, PaginationQueryParams } from './pagination';

export type ConnectionStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'CANCELED';

export interface Connection {
    id: number;
    senderUserId: number;
    receiverUserId: number;
    status: ConnectionStatus;
    createdAt: string;
    updatedAt: string;
}

export interface ConnectionRequest {
    receiverUserId: number;
}

export interface ConnectionStatusUpdateRequest {
    id: number;
    status: ConnectionStatus;
}

export interface ConnectionQueryParams extends PaginationQueryParams {
    userId?: number;
    status?: ConnectionStatus;
}

export type ConnectionPageResponse = PageResponse<Connection>;
