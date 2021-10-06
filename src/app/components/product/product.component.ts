import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
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
    this.itemAddEvent.emit(product);
    console.log(this.itemAddEvent);
  }

  ngOnInit(): void {}
}
