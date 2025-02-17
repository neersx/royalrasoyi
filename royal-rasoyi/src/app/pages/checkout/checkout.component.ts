import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from '../../components/auth/login-modal/login-modal.component';

@Component({
  selector: 'app-checkout',
  imports: [MatDialogModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  user: any = null;

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.openLoginModal();
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
