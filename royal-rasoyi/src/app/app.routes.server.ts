import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { FoodMenuService } from './services/food-menu.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'food-details/:name',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      const dataService = inject(FoodMenuService);
      const ids = await dataService.getFoodMenu().map((x: any) => x.name);
      return ids.map((name: string) => ({ name }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  },
];
