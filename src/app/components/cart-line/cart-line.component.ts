import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product.model';

@Component({
  selector: 'app-cart-line',
  templateUrl: './cart-line.component.html',
  styleUrls: ['./cart-line.component.css'],
})
export class CartLineComponent implements OnInit {
  @Input() cartProduct: CartProduct;
  @Output() increaseEvent = new EventEmitter<number>();
  @Output() decreaseEvent = new EventEmitter<number>();
  @Output() removeEvent = new EventEmitter<number>();
  constructor() {
    this.cartProduct = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1, // if in the cart, must be at least 1
      calcTotal: function (): number {
        return 0;
      },
      increase: async (): Promise<void> => {},
      decrease: async (): Promise<void> => {},
      remove: async (): Promise<void> => {},
      total: 0,
    };
  }

  async increase(value: number): Promise<void> {
    this.increaseEvent.emit(value);
    console.log('event from cart line fired');
  }

  async decrease(value: number): Promise<void> {
    this.decreaseEvent.emit(value);
  }

  async remove(value: number): Promise<void> {
    this.removeEvent.emit(value);
  }

  ngOnInit(): void {}
}
