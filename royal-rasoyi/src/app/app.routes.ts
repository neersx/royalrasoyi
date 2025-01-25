import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodMenuComponent } from './pages/food-menu/food-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { FoodDetailsComponent } from './pages/food-details/food-details.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Royal रसोई - Home made authentic taste that you deserve',
      description: 'Welcome to the home page of Angular 19 application.',
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Royal रसोई - Home made authentic taste that you deserve',
      description: 'Welcome to the home page of Angular 19 application.',
    },
  },
  {
    path: 'menu',
    component: FoodMenuComponent,
    data: {
      title:
        'Authentic Indian Homemade Dishes from Royal रसोई  | The Taste you deserve',
      description:
        'Authentic Indian Homemade Dishes from Royal रसोई  | The Taste you deserve',
    },
  },
  {
    path: 'food-details/:name',
    component: FoodDetailsComponent,
    data: {
      title: 'Specially crafted dishes that you will love to eat.',
      description: 'Specially crafted dishes that you will love to eat.',
    },
  },
  {
    path: 'about-us',
    component: AboutComponent,
    data: {
      title: 'About Us',
      description: 'Welcome to the about us page of Royal रसोई .',
    },
  },
    {
      path: 'why-us',
      component: WhyUsComponent,
      data: {
        title: 'Why choose Royal रसोई?',
        description: 'Introducing our esteemed culinary virtuoso, a maestro of flavors crafting exquisite dishes with passion, precision, and a touch of magic',
      },
  },
];
