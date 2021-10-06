import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartProduct[] = [];
  constructor() {}

  getCart(): CartProduct[] {
    return this.cart;
  }

  async inCart(id: number): Promise<boolean> {
    if ((await this.findIndex(id)) !== -1) {
      return true;
    }
    return false;
  } //may not need this

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
      item.quantity > 1 ? await item.decrease() : await this.remove(item.id);
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

  async addToCart(itemToAdd: Product): Promise<void> {
    try {
      const newCartItem = new CartProduct(itemToAdd);
      const index = await this.findIndex(itemToAdd.id);
      index === -1
        ? this.cart.push(newCartItem)
        : await this.increase(itemToAdd.id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
