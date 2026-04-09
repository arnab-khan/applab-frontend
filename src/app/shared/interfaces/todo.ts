import { PageResponse, PaginationQueryParams } from './pagination';

export interface Todo {
    id: number;
    title?: string;
    description?: string;
    userId?: number;
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface BaseTodo {
    id?: number;
    title?: string;
    description?: string;
}

export interface TodoQueryParams extends PaginationQueryParams {
    completed?: boolean;
}

export interface MarkTodoCompleteParams {
    id: number;
}

export type TodoPageResponse = PageResponse<Todo>;
