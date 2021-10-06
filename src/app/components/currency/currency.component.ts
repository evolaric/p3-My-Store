import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency',
  template: `<p>{{ price | currency }}</p>`,
})
export class CurrencyComponent {
  @Input() price: number;

  constructor() {
    this.price = 0;
  }
}
