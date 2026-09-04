import { PageResponse, PaginationQueryParams } from './pagination';

export interface User {
    id: number;
    name?: string;
    bio?: string;
    username?: string;
    email?: string;
    createdAt?: Date;
    updatedAt?: Date;
    profileImageUrl?: string;
    compressedProfileImageUrl?: string
}

export interface UserProfileImage {
    fileData?: string;
    compressedFileData?: string;
    fileName?: string;
    fileType?: string;
    userId: number;
}

export interface UpdateProfileBasics {
    name?: string;
    bio?: string;
}

export interface UpdateProfileCredentials {
    username?: string;
    password?: string;
    currentPassword: string;
}

export interface UserQueryParams extends PaginationQueryParams {}

export type UserPageResponse = PageResponse<User>;
