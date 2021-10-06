import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartProduct[] = [];
  constructor() {}

  getCart(): CartProduct[] {
    return this.cart;
  }

  async findIndex(id: number): Promise<number> {
    try {
      return this.cart.findIndex((obj) => obj.id === id);
    } catch (e) {
      throw new Error(e);
    }
  }

  /* async defineItem(id: number): Promise<void> {
    try {
      const index = await this.findIndex(id);
      const item = this.cart[index];
    } catch (e) {
      throw new Error(e);
    }
  } 
  
  WHY DID I WRITE THIS?*/

  async increase(id: number): Promise<void> {
    try {
      const index = await this.findIndex(id);
      const item = this.cart[index];
      index > -1 ? await item.increase() : null;
    } catch (e) {
      throw new Error(e);
    }
  }

  async decrease(id: number): Promise<void> {
    try {
      const index = await this.findIndex(id);
      const item = this.cart[index];
      index > 0 ? await item.decrease() : await this.remove(item.id);
    } catch (e) {
      throw new Error(e);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const index = await this.findIndex(id);
      this.cart.splice(index, 1);
    } catch (e) {
      throw new Error(e);
    }
  }

  async addToCart(itemToAdd: CartProduct): Promise<void> {
    try {
      const index = await this.findIndex(itemToAdd.id);
      index === -1
        ? this.cart.push(itemToAdd)
        : await this.increase(itemToAdd.id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
