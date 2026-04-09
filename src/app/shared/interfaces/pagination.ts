export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export class PaginationQueryParams {
    page?: number;
    size?: number;
    sort?: string;
    keyword?: string;
}

export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface PageResponse<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    empty: boolean;
}
