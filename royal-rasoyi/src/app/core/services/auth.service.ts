import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://strikeminds.com/auth/api/auth/login'; // Replace with actual API URL

  constructor(private readonly http: HttpClient) {}

  login(credentials: { phoneNumber: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
