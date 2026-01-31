import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'auth',
        canActivateChild: [GuestGuard],
        loadChildren: () => import('./features/auth/auth.routes').then(r => r.authRoutes),
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(r => r.Home),
    },
    {
        path: 'todo',
        loadComponent: () => import('./features/todo/todo').then(r => r.Todo),
        canActivate: [AuthGuard]
    },
];
