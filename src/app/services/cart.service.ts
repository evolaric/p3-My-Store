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
      index > 1 ? await item.decrease() : null;
    } catch (e) {
      throw new Error(e);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const index = await this.findIndex(id);
      index > 1 ? await this.cart[index].remove() : null;
    } catch (e) {
      throw new Error(e);
    }
  }

  async addToCart(itemToAdd: CartProduct): Promise<void> {
    try {
      this.cart.push(itemToAdd);
      console.log(this.cart);
    } catch (e) {
      throw new Error(e);
    }
  }
}
