import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from '../../components/auth/login-modal/login-modal.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LocationService } from '../../core/services/location.service';
import { Address } from '../../models/address.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  cartItems: any[] = [];
  user: any = null;
  address: Address | null = null;
  cartSubtotal: number = 0;
  shippingFee: number = 0;
  totalGst: number = 0;
  couponDiscount: number = 0;
  discount = 0;
  orderTotal: number = 0;
  addressForm: FormGroup;
  location: string | null = '';
  orderid: string | null = '';

  private readonly razorpayKey = 'rzp_live_PLBP5NKNs69xqz';
  private readonly razorpaySecret = 'f55EzMygz2pf53PEkQsbaDPT';

  constructor(
    private readonly dialog: MatDialog,
    private readonly fb: FormBuilder,
    private readonly locationService: LocationService,
    private readonly http: HttpClient
  ) {
    const location = localStorage.getItem('address');
    if (location) {
      this.address = JSON.parse(location);
      this.location = `${this.address?.premise}, ${this.address?.street}, ${this.address?.locality}, ${this.address?.city}`;
      console.log(this.address);
    }

    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      houseNo: ['', Validators.required],
      floor: [''],
      tower: ['', Validators.required],
      location: [this.location, Validators.required],
      zip: [this.address?.pinCode, Validators.required],
      orderNotes: [''],
    });
  }

  ngOnInit(): void {
    this.checkUserLogin();
    const storedCart = localStorage.getItem('cartItems');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.calculateTotals();
  }

  ngAfterViewInit(): void {
    this.addressForm.valueChanges.subscribe((values) => {
      if (values) {
        localStorage.setItem(
          'userAddress',
          JSON.stringify(this.addressForm.value)
        );
      }
    });
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

  prepareCartHeader() {
    const cartHeader = {
      userId: this.user.id,
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone,
      address: this.addressForm.value,
      couponCode: 'GSTFREE',
      discount : this.discount,
      cartTotal : this.cartSubtotal,
      shippingFee: this.shippingFee,
      gst: this.totalGst,
      orderTotal: this.orderTotal,
      cartDetails: this.cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };
    return cartHeader;
    };

  calculateTotals() {
    this.cartSubtotal = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    this.totalGst = this.cartSubtotal * 0.05;
    this.couponDiscount = this.totalGst;
    this.orderTotal =
      this.cartSubtotal +
      this.shippingFee +
      this.totalGst -
      this.couponDiscount;
  }

  prefillUserDetails() {
    if (this.user) {
      const userAddress = localStorage.getItem('userAddress');
      const formValues = JSON.parse(userAddress ?? '{}');

      // Patch the values into the form
      this.addressForm.patchValue(formValues);
      this.addressForm.patchValue({
        name: this.user.name || '',
        address: this.user.address || '',
        city: this.address?.city ?? '',
        zip: this.address?.pinCode ?? '',
      });
    }
  }

  createOrder(): void {}

  async initiatePayment() {
    const options = {
      description:
        'Hassle free and secure payment using Razorpay at Royal रसोई to complete your order.',
      currency: 'INR',
      amount: this.orderTotal * 100,
      name: 'Royal रसोई',
      key: this.razorpayKey,
      orderId: this.orderid,
      image:
        'https://res.cloudinary.com/royalrasoyi2025/image/upload/t_Profile/v1739982172/qdkcfno8o6ydp2jeiurh.png',
      prefill: {
        name: this.user?.name,
        email: this.user.email,
        phone: this.user.phone,
      },
      theme: {
        color: '#e35e17',
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  }

  openLoginModal() {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.user = result;
      }
    });
  }
}
