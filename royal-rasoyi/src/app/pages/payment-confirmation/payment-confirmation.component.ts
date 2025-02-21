import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent {
  @Input() orderDetails: any; // Input property to receive order data

  socialMediaLinks = {
    facebook: 'https://www.facebook.com/royalrasoyi',
    instagram: 'https://www.instagram.com/theroyalrasoyi',
    twitter: 'https://twitter.com/royalrasoyi',
  };

  shareOnSocialMedia(platform: string) {
    let shareText = `I just ordered fresh, healthy food from #RoyalRasoyi! 🍽️💚 Check it out: ${window.location.href}`;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        break;
      case 'instagram':
        alert('Instagram does not support direct web sharing. Follow us on Instagram!');
        return;
      default:
        return;
    }
    window.open(shareUrl, '_blank');
  }
}
