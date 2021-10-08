import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../models/cart-product.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  address: string;
  cardnumber: number | null;
  finalizedCart: CartProduct[];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.cardnumber = null;
    this.finalizedCart = [];
  }

  submitForm() {
    null;
  }

  ngOnInit(): void {}
}
