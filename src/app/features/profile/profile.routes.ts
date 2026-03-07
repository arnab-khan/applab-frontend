import { Routes } from '@angular/router';

export const profileRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./profile').then(m => m.Profile),
        children: [
            { path: '', redirectTo: 'view-profile', pathMatch: 'full' },
            {
                path: 'view-profile',
                loadComponent: () =>
                    import('./pages/view-profile/view-profile').then(
                        m => m.ViewProfile,
                    ),
            },
            {
                path: 'edit-profile',
                loadComponent: () =>
                    import('./pages/edit-profile/edit-profile').then(
                        m => m.EditProfile,
                    ),
            },
        ],
    },
];
