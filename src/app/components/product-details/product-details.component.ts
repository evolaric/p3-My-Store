import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/models/cart-product.model';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  product: Product;
  cart: CartProduct[] = [];
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private toast: ToastrService
  ) {
    this.id = 0;
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  async addToCart(itemToAdd: Product): Promise<void> {
    try {
      await this.cartService.addToCart(itemToAdd);
      await this.showIncrease();
    } catch (e) {
      throw new Error(e);
    }
  }

  async increase(id: number): Promise<void> {
    try {
      await this.cartService.increase(id);
      await this.showIncrease();
    } catch (e) {
      throw new Error(e);
    }
  }

  async decrease(id: number): Promise<void> {
    try {
      await this.cartService.decrease(id);
      await this.showDecrease();
    } catch (e) {
      throw new Error(e);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.cartService.remove(id);
      await this.showRemove();
    } catch (e) {
      throw new Error(e);
    }
  }

  inCart(id: number): boolean {
    const index = this.cart.findIndex((obj) => obj.id === id);
    if (index === -1) {
      return false;
    }
    return true;
  }

  amountInCart(id: number): number {
    const index = this.cart.findIndex((obj) => obj.id === id);
    const count = this.cart[index].quantity;
    return count;
  }

  async findProduct(id: number, array: Product[]): Promise<Product> {
    const product = array.find((e) => e.id === id);
    if (product !== undefined) {
      return product;
    } else return this.product;
  }

  async showIncrease(): Promise<void> {
    try {
      this.toast.success(`${this.product.name} added to cart`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async showDecrease(): Promise<void> {
    try {
      this.toast.success(`${this.product.name} removed from cart`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async showRemove(): Promise<void> {
    try {
      this.toast.success(`${this.product.name} cleared from cart`);
    } catch (e) {
      throw new Error(e);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this.cart = this.cartService.getCart();

    this.productsService.getProducts().subscribe(async (res) => {
      if (res !== undefined) {
        this.product = await this.findProduct(this.id, res);
      }
    });
  }
}
