import { Routes } from '@angular/router';

export const chatRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./chat').then(r => r.Chat),
        children: [
            { path: '', redirectTo: 'global', pathMatch: 'full' },
            { path: 'global', loadComponent: () => import('./pages/global-chat/global-chat').then(r => r.GlobalChat) },
            { path: 'group', loadComponent: () => import('../../core/pages/coming-soon/coming-soon').then(r => r.ComingSoon) },
            { path: 'direct', loadComponent: () => import('../../core/pages/coming-soon/coming-soon').then(r => r.ComingSoon) },
        ],
    },
];
