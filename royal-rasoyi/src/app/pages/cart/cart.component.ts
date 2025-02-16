import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ReactiveFormsModule, FormsModule, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  shippingFee: number = 50; // Example shipping fee

  constructor(private readonly cartService: CartService) {}

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

  removeItem(item: any) {
    this.cartItems = this.cartService.removeFromCart(item.id);
    this.calculateTotal();
  }

  calculateTotal() {
    this.cartTotal = this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}
