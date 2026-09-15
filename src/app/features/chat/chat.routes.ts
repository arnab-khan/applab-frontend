import { Routes } from '@angular/router';

export const chatRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./chat').then(r => r.Chat),
        children: [
            { path: '', redirectTo: 'global', pathMatch: 'full' },
            { path: 'global', loadComponent: () => import('./pages/global-chat/global-chat').then(r => r.GlobalChat) },
            // { path: 'group', loadComponent: () => import('./pages/group-chat/group-chat').then(r => r.GroupChat) },
            { path: 'direct', loadComponent: () => import('./pages/direct-chat/direct-chat').then(r => r.DirectChat) },
        ],
    },
];
