import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { AppSharedModule } from '../shared/app-shared.module';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    PriceTableComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppSharedModule
  ],
  exports: [ProductTableComponent, ProductsRoutingModule]
})
export class ProductsModule { }
