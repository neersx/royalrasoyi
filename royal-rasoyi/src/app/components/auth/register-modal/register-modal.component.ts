import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, FormsModule, MatInputModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss'
})
export class RegisterModalComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private readonly dialogRef: MatDialogRef<RegisterModalComponent>,
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  close() {
    this.dialogRef.close();
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response: any) => {
          const loginForm: any = {
            username: this.registerForm.value.phoneNumber,
            password: this.registerForm.value.password
          };
          // Auto-login after registration
          this.authService.login(loginForm).subscribe({
            next: (loginResponse: any) => {
              this.dialogRef.close(loginResponse.result?.user);
            },
            error: () => {
              this.errorMessage = 'Registration successful, but auto-login failed!';
            }
          });
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Registration failed!';
        }
      });
    }
  }
}
