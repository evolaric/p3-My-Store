import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() itemAddEvent = new EventEmitter();
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  addToCart(product: Product): void {
    console.log('call in child ' + product.name + product.price);
    this.itemAddEvent.emit(product);
  }

  ngOnInit(): void {}
}
