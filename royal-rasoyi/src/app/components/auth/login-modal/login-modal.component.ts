import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-login-modal',
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, FormsModule, MatInputModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private readonly dialogRef: MatDialogRef<LoginModalComponent>,
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  close() {
    this.dialogRef.close();
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.dialogRef.close(response.user);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Login failed!';
        }
      });
    }
  }
}
