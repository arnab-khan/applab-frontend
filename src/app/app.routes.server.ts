import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'auth/**',
    renderMode: RenderMode.Prerender,
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
