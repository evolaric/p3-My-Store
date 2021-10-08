import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

/* 
This is a standing for an API.
Realistically, we should have a few more services:
User
Regional currencies
Shipping methods
Credit card validation
*/

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // API call
    return this.http.get<Product[]>('../../assets/data.json');
  }
}
