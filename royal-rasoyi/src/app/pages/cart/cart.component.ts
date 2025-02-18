import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  shippingFee: number = 19; // Example shipping fee

  constructor(private readonly cartService: CartService, private readonly router : Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.calculateTotal();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.calculateTotal();
    }
  }
  proceedToCheckout() {
    // Redirect to checkout page
    console.log('Proceed to checkout', this.cartItems);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.router.navigate(['/checkout']);
  }

  removeItem(item: any) {
    this.cartItems = this.cartService.removeFromCart(item.id);
    this.calculateTotal();
  }

  calculateTotal() {
    this.cartTotal = this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}
