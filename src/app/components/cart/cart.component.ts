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

  async increase(id: number) {
    try {
      await this.cartService.increase(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}