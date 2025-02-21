import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodMenuComponent } from './pages/food-menu/food-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { FoodDetailsComponent } from './pages/food-details/food-details.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { NgModule } from '@angular/core';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentConfirmationComponent } from './pages/payment-confirmation/payment-confirmation.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
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
  },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment-confirmed', component: PaymentConfirmationComponent },
  {
    path: 'about-us',
    component: AboutComponent,
    data: {
      title: 'Why choose Royal रसोई?',
      description: 'Introducing our esteemed culinary virtuoso, a maestro of flavors crafting exquisite dishes with passion, precision, and a touch of magic',
    },
  },
    {
      path: 'why-us',
      component: WhyUsComponent,
      // data: {
      //   title: 'Why choose Royal रसोई?',
      //   description: 'Introducing our esteemed culinary virtuoso, a maestro of flavors crafting exquisite dishes with passion, precision, and a touch of magic',
      // },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
