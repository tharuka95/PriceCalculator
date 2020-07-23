import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {
productId = 1;
dataModel = [];
queryParameters: any;
productTableData = [];
title: any;
items = [
  {id: 1, value: 'Penguin Ears'},
  {id: 2, value: 'Horse Shoe'}
];
config = {
  displayKey: 'value',
  search: true,
};
  constructor(private service: ProductService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.queryParameters = this.route.snapshot.paramMap.get('id');
    this.productId = parseInt(this.queryParameters, 10);
    this.title = this.items.filter(x => x.id === this.productId)[0].value;
    this.getProductTableDetails(this.productId);
  }

  getProductTableDetails(productId){
    this.service.getProductTable(productId).subscribe((data: any) => {
      if (data.status === 'OK') {
        this.productTableData = data.payload;
      } else {
        this.toastr.error('Error happen! Try Again Later');
      }
    });
  }

  goToProductTable(){
    this.router.navigate(['productTable']);
  }
}
