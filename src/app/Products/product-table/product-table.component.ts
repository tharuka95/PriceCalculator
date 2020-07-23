import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
productList: any = [];
  constructor(private service: ProductService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getProductList().subscribe((data: any) => {
      if (data.status === 'OK') {
        this.productList = data.payload;
      } else {
        this.toastr.error('Error happen! Try Again Later');
      }
    });
  }

  goToProductTable(product) {
    this.router.navigate(['priceTable/' + product.id]);
  }

}
