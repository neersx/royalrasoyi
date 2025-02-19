import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from '../../components/auth/login-modal/login-modal.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LocationService } from '../../core/services/location.service';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-checkout',
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  user: any = null;
  address: Address | null = null;
  cartSubtotal: number = 0;
  shippingFee: number = 20;
  orderTotal: number = 0;
  checkoutForm: FormGroup;
  location: string | null = '';

  constructor(private readonly dialog: MatDialog, private readonly fb: FormBuilder,
    private readonly locationService: LocationService) {

    const location = localStorage.getItem("address");
    if (location) {
      this.address = JSON.parse(location);
      this.location = `${this.address?.premise}, ${this.address?.street}, ${this.address?.locality}, ${this.address?.city}`;
      console.log(this.address);
    }

    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      houseNo: ['', Validators.required],
      floor: ['', Validators.required],
      tower: ['', Validators.required],
      location: [this.location, Validators.required],
      zip: [this.address?.pinCode, Validators.required],
      orderNotes: ['']
    });
  }

  ngOnInit(): void {
    const storedCart = localStorage.getItem("cartItems");
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.calculateTotals();
    this.checkUserLogin();
  }
  

  checkUserLogin() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.openLoginModal();
    } else {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
      this.prefillUserDetails();
    }
  }

  calculateTotals() {
    this.cartSubtotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.orderTotal = this.cartSubtotal + this.shippingFee;
  }

  prefillUserDetails() {
    if (this.user) {
      this.checkoutForm.patchValue({
        name: this.user.name || '',
        address: this.user.address || '',
        city: this.address?.city || '',
        zip: this.address?.pinCode || ''
      });
    }
  }

  openLoginModal() {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result;
      }
    });
  }

}
