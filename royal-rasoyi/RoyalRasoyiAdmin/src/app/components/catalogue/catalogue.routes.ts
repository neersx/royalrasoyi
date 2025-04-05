import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: '',
    children: [
      {
        path: 'food-menu',
        loadComponent: () =>
          import('./food-menu-master/food-menu-master.component').then(
            (m) => m.FoodMenuMasterComponent
          ),
      },
      {
        path: 'food-menu-details/:id',
        loadComponent: () =>
          import('./food-menu-details/food-menu-details.component').then(
            (m) => m.FoodMenuDetailsComponent
          ),
      },
      {
        path: 'food-items',
        loadComponent: () =>
          import('./food-items/food-items.component').then(
            (m) => m.FoodItemsComponent
          ),
      },
      {
        path: 'food-ingredients',
        loadComponent: () =>
          import('./food-ingredients/food-ingredients.component').then(
            (m) => m.FoodIngredientsComponent
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class CatalougeRoutingModule {
  static readonly routes = admin;
}
