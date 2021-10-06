import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product.model';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product: Product;
  products: Product[] | CartProduct[] = [];
  cart: CartProduct[] = [];
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    this.products = [];
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  async addToCart(itemToAdd: Product): Promise<void> {
    const cartItem = new CartProduct(itemToAdd);
    try {
      await this.cartService.addToCart(cartItem);
    } catch (e) {
      throw new Error(e);
    }
  }

  async existInCart(): Promise<void> {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
    });

    this.cart = this.cartService.getCart();
  }
}
