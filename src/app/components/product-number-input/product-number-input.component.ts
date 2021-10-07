import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-number-input',
  templateUrl: './product-number-input.component.html',
  styleUrls: ['./product-number-input.component.css'],
})
export class ProductNumberInputComponent implements OnInit {
  @Input() product: number;
  @Input() count: number;
  @ViewChild('search') search: ElementRef; // @todo research ElementalRef as type
  visible: boolean;
  // be sure to inject ElementRef, dummy!
  constructor(
    private ElementRef: ElementRef,
    private cartService: CartService
  ) {
    this.visible = false;
    this.search = this.ElementRef;
    this.count = 0;
    this.product = 0;
  }

  async changeCount(quantity: number): Promise<void> {
    try {
      console.log(this.product, quantity);
      this.cartService.changeQuantity(this.product, quantity);
    } catch (e) {
      throw new Error(e);
    }
  }

  blur(): void {
    this.search.nativeElement.blur(); // all other native methods are available as well
    this.visible = false;
  }

  visibilityToggle(): void {
    this.visible = !this.visible;
  }

  /* setVisible(): void {
    this.visible = true;
  }

  isVisible(): boolean {
    return this.visible;
  } */

  ngOnInit(): void {}
}
