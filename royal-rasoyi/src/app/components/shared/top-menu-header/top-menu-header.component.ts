import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { LoginModalComponent } from '../../auth/login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterModalComponent } from '../../auth/register-modal/register-modal.component';

@Component({
  selector: 'app-top-menu-header',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './top-menu-header.component.html',
  styleUrl: './top-menu-header.component.scss'
})
export class TopMenuHeaderComponent implements OnInit, AfterViewInit {
  cartCount: number = 0;
  isUserLoggedIn: boolean = false;
  user: any = null;

  constructor(private readonly authService: AuthService, private readonly cartService: CartService, private readonly dialog: MatDialog, private readonly router: Router) {}

  ngOnInit() {
    this.checkUserLogin();
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
      return this.cartCount;
    });

    if (localStorage.getItem('cartItems')) {
      const storedCart = localStorage.getItem("cartItems");
      this.cartCount = storedCart ? JSON.parse(storedCart).length : 0;
    }
  }

  ngAfterViewInit(): void {
      this.authService.userData$.subscribe((user: any) => {
        this.isUserLoggedIn = !!user;
      });
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.user = null;
  }

  checkUserLogin() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.openLoginModal();
    } else {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
      this.isUserLoggedIn = !!this.user;
      // this.prefillUserDetails();
    }
  }
  openRegistration() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result, 'header login result');
      }
    });
  }

    openLoginModal() {
      const dialogRef = this.dialog.open(LoginModalComponent, {
        width: '400px'
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          console.log(result, 'header login result');
        }
      });
    }
}
