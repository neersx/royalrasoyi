import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { FoodMenuService } from './services/food-menu.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'why-choose-us',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  },
];
