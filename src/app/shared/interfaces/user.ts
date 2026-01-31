export interface User {
    id: number;
    name?: string;
    username?: string;
}

export interface CreateUser {
    name: string;
    username: string;
    password: string;
}

export interface LoginUser {
    username: string;
    password: string;
}