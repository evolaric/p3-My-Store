import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../models/cart-product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartProduct[];
  constructor(private cartService: CartService) {
    this.cart = [];
  }

  async increase($increaseEvent: number): Promise<void> {
    try {
      console.log($increaseEvent);
      await this.cartService.increase($increaseEvent);
    } catch (e) {
      throw new Error(e);
    }
  }

  async decrease(id: number): Promise<void> {
    try {
      await this.cartService.decrease(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.cartService.remove(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
