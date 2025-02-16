import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-top-menu-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './top-menu-header.component.html',
  styleUrl: './top-menu-header.component.scss'
})
export class TopMenuHeaderComponent {
  cartCount: number = 10;

  constructor(private readonly cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
