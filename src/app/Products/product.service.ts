import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  priceTableuri = '/get-price-table/{id}';
  priceApi = environment.priceApi;
  productApi = environment.productApi;
  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(environment.apiUrl + this.productApi + `/get-products`);
  }

  getProductTable(value) {
    return this.http.get((environment.apiUrl + this.productApi + this.priceTableuri).replace('{id}', value));
  }
}
