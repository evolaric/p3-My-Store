import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  constructor() {}

  getCart(): Product[] {
    return this.cart;
  }
}
