import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly http: HttpClient
  ) {}

  loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!isPlatformBrowser(this.platformId)) {
        resolve();
        return;
      }

      if (document.getElementById('razorpay-script')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = 'razorpay-script';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve();
      script.onerror = () => reject('Failed to load Razorpay script.');
      document.body.appendChild(script);
    });
  }

  payNow() {
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: 100000,
      name: 'Sai',
      key: 'rzp_test_ykpIQCXJbWgyQi',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      prefill: {
        name: 'sai kumar',
        email: 'sai@gmail.com',
        phone: '9898989898'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }

  async initiatePayment(order: any): Promise<any> {
    if (!isPlatformBrowser(this.platformId)) {
      console.warn('Razorpay is only available in the browser.');
      return;
    }

    await this.loadRazorpayScript();

    return new Promise((resolve, reject) => {
      const options = {
        key: 'rzp_live_m4ngERAs4d0DDU',
        amount: order.amount,
        currency: order.currency,
        name: 'Royal Rasoyi',
        order_id: order.id,
        image: 'https://i.imgur.com/FApqk3D.jpeg',
        prefill: {
          name: 'sai kumar',
          email: 'sai@gmail.com',
          phone: '9898989898'
        },
        theme: {
          color: '#6466e3'
        },
        modal: {
          ondismiss:  () => {
            console.log('dismissed')
          }
        },
        handler: async (response: any) => {
          resolve(response);
        },
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    });
  }
}
