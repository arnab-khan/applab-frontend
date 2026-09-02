import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { GuestGuard } from '../../core/guards/guest.guard';

export const authRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./auth').then(m => m.Auth),
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                canActivate: [GuestGuard],
                loadComponent: () => import('./pages/login/login').then(m => m.Login),
            },
            {
                path: 'signup',
                canActivate: [GuestGuard],
                loadComponent: () => import('./pages/signup/signup').then(m => m.Signup),
                data: { containerClass: 'u-container-3' },
            },
            {
                path: 'password-verification',
                canActivate: [AuthGuard],
                loadComponent: () => import('./pages/password-verification/password-verification').then(m => m.PasswordVerification),
            },
            {
                path: 'email-entry',
                loadComponent: () => import('./pages/email-entry/email-entry').then(m => m.EmailEntry),
            },
            {
                path: 'otp-verification',
                loadComponent: () => import('./pages/otp-verification/otp-verification').then(m => m.OtpVerification),
            },
        ],
    },
];
