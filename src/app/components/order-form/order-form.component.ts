import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private route: Router) {
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.cardnumber = null;
    this.finalizedCart = [];
  }

  submitForm() {
    this.route.navigate(['/confirmation']);
    /* 
    Realistically, this should have a lot of logic here:
    1. Set the user information (assuming it had not been set via login)
    2. Call services to finalize the order in the database
    3. Validate the credit card and get a confirmation number via a service
    4. Push this order into a "closed order" database table via a service
    5. etc.

    However, for the sake of simplicity, we will simply route to the confirmation page
    and clear the cart.
    */
  }

  ngOnInit(): void {}
}
