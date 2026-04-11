import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { PublicProfileResolver } from './features/profile/pages/public-profile/public-profile.resolver';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(r => r.Home),
    },
    {
        path: 'auth',
        canActivateChild: [GuestGuard],
        loadChildren: () => import('./features/auth/auth.routes').then(r => r.authRoutes),
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/profile/profile.routes').then(r => r.profileRoutes),
    },
    {
        path: 'users/:username',
        loadComponent: () => import('./features/profile/pages/public-profile/public-profile').then(r => r.PublicProfile),
        resolve: { publicProfile: PublicProfileResolver },
    },
    {
        path: 'todo',
        canActivate: [AuthGuard],
        loadComponent: () => import('./features/todo/todo').then(r => r.Todo),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./core/pages/not-found/not-found').then(r => r.NotFound),
    },
];
