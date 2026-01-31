import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(r => r.authRoutes),
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(r => r.Home),
    },
];
