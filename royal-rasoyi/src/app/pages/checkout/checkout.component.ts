import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from '../../components/auth/login-modal/login-modal.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-checkout',
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  user: any = null;
  checkoutForm: FormGroup;

  constructor(private readonly dialog: MatDialog, private readonly fb: FormBuilder,
    private readonly authService: AuthService) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      orderNotes: ['']
    });
  }

  ngOnInit(): void {
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

  prefillUserDetails() {
    if (this.user) {
      this.checkoutForm.patchValue({
        name: this.user.name || '',
        address: this.user.address || '',
        city: this.user.city || '',
        zip: this.user.zip || ''
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
