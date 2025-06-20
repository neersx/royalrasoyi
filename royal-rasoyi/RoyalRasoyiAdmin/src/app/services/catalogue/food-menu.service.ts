import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { FoodMaster } from '../../models/food-master.model';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  private apiUrl = 'http://strikeminds.com/products/api/product';

  constructor(private readonly http: HttpClient) {}

  private productId = new Subject<any>();
  dynamicProductId = this.productId.asObservable();
  emitProductId(value: any){
    this.productId.next(value);
  }

  getFoodMenuList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFoodDetals(id: number): Observable<FoodMaster> {
    return this.http.get<FoodMaster>(`${this.apiUrl}/${id}`);
  }
}
