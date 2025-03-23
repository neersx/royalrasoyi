import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodMaster } from '../../models/food-master.model';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  private apiUrl = 'http://strikeminds.com/products/api/product';

  constructor(private readonly http: HttpClient) {}

  getFoodMenuList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
