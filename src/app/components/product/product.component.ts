import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CartProduct } from '../../models/cart-product.model';
import { Product } from '../../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() cart: CartProduct[];
  @Input() product: Product;
  @Output() itemAddEvent = new EventEmitter<Product>();
  @Output() increaseEvent = new EventEmitter<number>();
  @Output() decreaseEvent = new EventEmitter<number>();
  @Output() removeEvent = new EventEmitter<number>();
  constructor(private toast: ToastrService) {
    this.cart = [];
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  async addToCart(product: Product): Promise<void> {
    try {
      this.itemAddEvent.emit(product);
      await this.showIncrease();
    } catch (e) {
      throw new Error(e);
    }
  }

  inCart(id: number): boolean {
    const index = this.cart.findIndex((obj) => obj.id === id);
    if (index !== -1) return true;
    return false;
  }

  amountInCart(id: number): number {
    const index = this.cart.findIndex((obj) => obj.id === id);
    const count = this.cart[index].quantity;
    return count;
  } // ? Check to see if this is called

  async increase(value: number): Promise<void> {
    try {
      this.increaseEvent.emit(value);
      await this.showIncrease();
    } catch (e) {
      throw new Error(e);
    }
  }

  async decrease(value: number): Promise<void> {
    try {
      this.decreaseEvent.emit(value);
      await this.showDecrease();
    } catch (e) {
      throw new Error(e);
    }
  }

  async remove(value: number): Promise<void> {
    try {
      this.removeEvent.emit(value);
      await this.showRemove();
    } catch (e) {
      throw new Error(e);
    }
  }

  async showIncrease(): Promise<void> {
    this.toast.success(`${this.product.name} added to cart`);
  }

  async showDecrease(): Promise<void> {
    this.toast.success(`${this.product.name} removed from cart`);
  }

  async showRemove(): Promise<void> {
    this.toast.success(`${this.product.name} cleared from cart`);
  }

  ngOnInit(): void {}
}
