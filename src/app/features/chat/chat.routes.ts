import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

export const chatRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./chat').then(r => r.Chat),
        children: [
            { path: '', redirectTo: 'direct', pathMatch: 'full' },
            { path: 'global', loadComponent: () => import('./pages/global-chat/global-chat').then(r => r.GlobalChat) },
            { path: 'group', loadComponent: () => import('../../core/pages/coming-soon/coming-soon').then(r => r.ComingSoon) },
            { path: 'direct', canActivate: [AuthGuard], loadComponent: () => import('./pages/direct-chat/direct-chat').then(r => r.DirectChat) },
        ],
    },
];
