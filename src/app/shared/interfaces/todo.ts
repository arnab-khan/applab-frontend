export interface Todo {
    id: number;
    title?: string;
    description?: string;
    userId?: boolean;
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