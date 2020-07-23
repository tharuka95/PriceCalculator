import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './Order/order/order.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PriceTableComponent } from './Products/price-table/price-table.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuantitySelectorComponent } from './Order/shared/quantity-selector/quantity-selector.component';
import { ProductTableComponent } from './Products/product-table/product-table.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from './Order/order.module';
import { ProductsModule } from './Products/products.module';
import { AppSharedModule } from './shared/app-shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    OrderModule,
    ProductsModule,
    AppSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
