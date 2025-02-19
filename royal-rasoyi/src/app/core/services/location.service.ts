import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../../models/address.model';

declare const google: any; 

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly apiUrl = 'https://your-api-url.com/api/location/save';
  private googleMapsApiKey = 'AIzaSyDjI_HAgjlQnBYpHDHiXRKWJN-W8E8jh_0';


  constructor(private readonly http: HttpClient) {}

  saveLocation(locationData: { latitude?: number; longitude?: number; address?: string }) {
    console.log(locationData);
    return this.http.post(this.apiUrl, locationData);
  }

  getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }

  getAddressFromCoordinates(latitude: number, longitude: number): Promise<Address> {
    return new Promise((resolve, reject) => {
      if (!google || !google.maps) {
        reject('Google Maps API is not loaded.');
        return;
      }
  
      const geocoder = new google.maps.Geocoder();
      const latLng = new google.maps.LatLng(latitude, longitude);
  
      geocoder.geocode({ location: latLng }, (results: any, status: any) => {
        if (status === google.maps.GeocoderStatus.OK && results[0]) {
          const addressComponents = results[0].address_components;
          const mappedAddress = this.getGoogleMapAddress(addressComponents);
          resolve(mappedAddress);
        } else {
          reject('Unable to retrieve address.');
        }
      });
    });
  }

  extractPincode(address?: string): string | null {
    if(!address) return '';
    const pincodeRegex = /\b\d{6}\b/; // Matches exactly 6-digit numbers
    const match = address.match(pincodeRegex);
    return match ? match[0] : null; // Returns the pincode if found, otherwise null
  }

  getGoogleMapAddress(addressComponents: any[]): Address {
    let address: Address = {
      premise: '',
      street: '',
      locality: '',
      city: '',
      state: '',
      pinCode: '',
      landmark: ''
    };
  
    addressComponents.forEach((component) => {
      if (component.types.includes('premise')) {
        address.premise = component.long_name;
      } 
      if (component.types.includes('route')) {
        address.street = component.long_name;
      }
      if (component.types.includes('sublocality') || component.types.includes('sublocality_level_1')) {
        address.locality = component.long_name;
      }
      if (component.types.includes('locality')) {
        address.city = component.long_name;
      }
      if (component.types.includes('administrative_area_level_1')) {
        address.state = component.long_name;
      }
      if (component.types.includes('postal_code')) {
        address.pinCode = component.long_name;
      }
      if (component.types.includes('point_of_interest') || component.types.includes('landmark')) {
        address.landmark = component.long_name;
      }
    });
  
    return address;
  }
  
  
}
