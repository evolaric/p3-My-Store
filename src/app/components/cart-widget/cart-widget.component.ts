import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css'],
})
export class CartWidgetComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getItemCount(): number {
    return this.cartService.getItemCount();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }
}
