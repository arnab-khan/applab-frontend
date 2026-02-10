import { PageResponse } from './pagination';

export interface Todo {
    id: number;
    title?: string;
    description?: string;
    userId?: number;
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateTodo {
    title: string;
    description: string;
}

export interface UpdateTodo {
    id: number;
    title?: string;
    description?: string;
}

export interface TodoQueryParams {
    page: number;
    size: number;
    sort?: string;
    keyword?: string;
    completed?: boolean;
}

export interface MarkTodoCompleteParams {
    id: number;
}

export type TodoPageResponse = PageResponse<Todo>;