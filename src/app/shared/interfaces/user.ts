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

export interface CreateUser {
    name: string;
    username: string;
    password: string;
}

export interface LoginUser {
    username: string;
    password: string;
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

export type PasswordVerificationPurpose = 'CHANGE_EMAIL';

export interface PasswordVerificationRequest {
    currentPassword: string;
    purpose: PasswordVerificationPurpose;
}

export interface EmailOtpRequest {
    email: string;
}

export interface EmailOtpResponse {
    message: string;
    emailChangeId: string;
    sentTo: string;
    expiresAt: string;
    expiresInSeconds: number;
    otpDigits: number;
    resendCooldownSeconds: number;
    resendAvailableAt: string;
    remainingResends: number;
}

export type EmailFlowPurpose = 'SIGNUP' | 'EDIT_PROFILE';

export interface EmailOtpVerificationRequest {
    emailChangeId: string;
    otp: string;
}

export interface UserQueryParams extends PaginationQueryParams {}

export type UserPageResponse = PageResponse<User>;
