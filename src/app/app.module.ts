import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonDirective } from './directives/back-button.directive';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CartLineComponent } from './components/cart-line/cart-line.component';
import { ProductNumberInputComponent } from './components/product-number-input/product-number-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonDirective,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CurrencyComponent,
    CartLineComponent,
    ProductNumberInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
