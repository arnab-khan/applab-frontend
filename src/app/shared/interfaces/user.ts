export interface User {
    id: number;
    name?: string;
    username?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserProfileImage {
    fileData: string;
    fileName: string;
    fileType: string;
    userId: number;
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
