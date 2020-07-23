import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './Order/order/order.component';
import { OrderSummaryComponent } from './Order/order-summary/order-summary.component';
import { PriceTableComponent } from './Products/price-table/price-table.component';
import { ProductTableComponent } from './Products/product-table/product-table.component';


const routes: Routes = [
  { path: '' , redirectTo: 'productTable', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
