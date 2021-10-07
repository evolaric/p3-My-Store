import { Component, Input } from '@angular/core';

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
