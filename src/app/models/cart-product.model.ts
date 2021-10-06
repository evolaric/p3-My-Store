import { Product } from './product.model';

export class CartProduct extends Product {
  quantity: number;
  increase: Function;
  decrease: Function;
  calcTotal: Function;
  remove: Function;
  total: number;

  constructor(product: Product) {
    super();
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.url = product.url;
    this.description = product.description;
    this.quantity = 1; // if in the cart, must be at least 1
    this.calcTotal = function (): number {
      const total = this.quantity * this.price;
      return total;
    };
    this.increase = async (): Promise<void> => {
      this.quantity++;
      this.total = this.calcTotal();
    };
    this.decrease = async (): Promise<void> => {
      this.quantity--;
      this.total = this.calcTotal();
    };
    this.remove = async (): Promise<void> => {
      this.quantity = 0;
      this.total = this.calcTotal();
    };
    this.total = this.price;
  }
}
