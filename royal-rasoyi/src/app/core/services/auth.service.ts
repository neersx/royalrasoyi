import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://strikeminds.com/auth/api/auth'; // Replace with actual API URL

  private readonly userData = new BehaviorSubject<any>({}); // Observable cart count
    userData$ = this.userData.asObservable(); 

  constructor(private readonly http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.result?.token);
        localStorage.setItem('user', JSON.stringify(response.result?.user));
        this.userData.next(response.result?.user);
        return response;
      })
    );
  }

  register(credentials: { phoneNumber: string; password: string; name: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userData.next({});
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
