import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'productTable', component: ProductTableComponent },
  {path: 'priceTable/:id', component: PriceTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
