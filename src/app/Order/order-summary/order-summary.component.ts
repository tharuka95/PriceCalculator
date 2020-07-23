import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
orderDetails: any;
orderItems: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.orderDetails = JSON.parse(localStorage.getItem('orderData'));
    this.orderItems = JSON.parse(this.orderDetails.orderItems);
  }

  goBack() {
    this.router.navigate(['productTable']);
    localStorage.removeItem('orderData');
  }
}
