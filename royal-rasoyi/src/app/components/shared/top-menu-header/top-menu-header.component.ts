import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-top-menu-header',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './top-menu-header.component.html',
  styleUrl: './top-menu-header.component.scss'
})
export class TopMenuHeaderComponent {
  cartCount: number = 0;

  constructor(private readonly cartService: CartService, private readonly router: Router) {}

  ngOnInit() {

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
      return this.cartCount;
    });

    if (localStorage.getItem('cartItems')) {
      const storedCart = localStorage.getItem("cartItems");
      this.cartCount = storedCart ? JSON.parse(storedCart).length : 0;
    }
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
