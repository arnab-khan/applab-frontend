export interface CreateUser {
    name: string;
    username: string;
    password: string;
}

export interface LoginUser {
    username: string;
    password: string;
}

export interface ForgotPasswordOtpRequest {
    email: string;
}

export interface ForgotPasswordOtpVerificationRequest {
    requestId: string;
    otp: string;
}

export interface PasswordResetTokenResponse {
    resetToken: string;
    expiresAt: string;
    expiresInSeconds: number;
}

export interface PasswordResetRequest {
    resetToken: string;
    newPassword: string;
}

export interface PasswordResetResponse {
    message: string;
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
    requestId: string;
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
    requestId: string;
    otp: string;
}
