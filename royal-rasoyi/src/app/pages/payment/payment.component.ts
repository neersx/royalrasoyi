import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [HttpClientModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  private razorpayKey = 'your_razorpay_key_id';

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.loadRazorpayScript();
    }
  }
  
  loadRazorpayScript() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }
  

  async initiatePayment() {
    // Fetch order ID from backend
    const order = await this.http.post<any>('/api/payment/order', { amount: 500 }) // Adjust amount
      .toPromise();

    const options = {
      key: this.razorpayKey,
      amount: order.amount,
      currency: order.currency,
      name: 'Your Business Name',
      description: 'Order Payment',
      order_id: order.id,
      handler: function (response: any) {
        console.log('Payment Successful', response);
        alert('Payment Successful!');
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  }
}
