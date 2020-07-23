import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderService } from './order.service';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { QuantitySelectorComponent } from './shared/quantity-selector/quantity-selector.component';
import { AppSharedModule } from '../shared/app-shared.module';



@NgModule({
  declarations: [
    OrderComponent,
    OrderSummaryComponent,
    QuantitySelectorComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    AppSharedModule
  ],
  providers: [
    OrderService
  ],
  exports: [OrderComponent, OrderRoutingModule]
})
export class OrderModule { }
