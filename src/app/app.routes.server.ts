import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'home',
  //   renderMode: RenderMode.Prerender,
  // },
  {
    path: 'auth/**',
    renderMode: RenderMode.Server,
  },
  {
    path: 'user/**',
    renderMode: RenderMode.Server,
  },
  {
    path: 'users',
    renderMode: RenderMode.Server,
  },
  {
    path: 'todo',
    renderMode: RenderMode.Server,
  },
  {
    path: '',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
