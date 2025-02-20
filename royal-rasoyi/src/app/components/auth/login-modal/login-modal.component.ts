import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterModalComponent } from '../register-modal/register-modal.component';


@Component({
  selector: 'app-login-modal',
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, FormsModule, MatInputModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  user: any;

  constructor(
    private readonly dialogRef: MatDialogRef<LoginModalComponent>,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  close() {
    this.dialogRef.close();
  }

  register() {
    this.dialogRef.close('login');
    this.openRegisterModal();
  }

  openRegisterModal() {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.user = result;
      }
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          this.dialogRef.close(response.result?.user);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Login failed!';
        }
      });
    }
  }
}
