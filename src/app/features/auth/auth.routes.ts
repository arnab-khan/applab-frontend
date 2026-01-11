import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./auth').then(m => m.Auth),
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
            { path: 'signup', loadComponent: () => import('./pages/signup/signup').then(m => m.Signup) },
        ],
    },
];