import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getAddressFromCoordinates(latitude: number, longitude: number): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!google || !google.maps) {
        reject('Google Maps API is not loaded.');
        return;
      }

      const geocoder = new google.maps.Geocoder();
      const latLng = new google.maps.LatLng(latitude, longitude);

      geocoder.geocode({ location: latLng }, (results: any, status: any) => {
        if (status === google.maps.GeocoderStatus.OK && results[0]) {
          resolve(results[0].formatted_address);
        } else {
          reject('Unable to retrieve address.');
        }
      });
    });
  }
}
