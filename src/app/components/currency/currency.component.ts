import { Component, Input } from '@angular/core';

/* 
Had to use a pipe once I found out about them
Probably one of the better features of Angular
*/

@Component({
  selector: 'app-currency',
  template: `{{ price | currency }}`,
})
export class CurrencyComponent {
  @Input() price: number;

  constructor() {
    this.price = 0;
  }
}
