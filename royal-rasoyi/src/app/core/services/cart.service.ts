import { Injectable } from "@angular/core";
import { MEASUREMENT_UNIT } from "../constants/food-measurement.constants";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {}
  measurementUnits = MEASUREMENT_UNIT;

  private readonly cartCount = new BehaviorSubject<number>(0); // Observable cart count
  cartCount$ = this.cartCount.asObservable(); 

  private readonly cartItems: any[] = [];

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartCount.next(this.cartItems.length); // Update count
  }

  getCartCount(): number {
    return this.cartItems.length;
  }
}