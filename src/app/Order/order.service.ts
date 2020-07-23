import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

priceApi = environment.priceApi;
productApi = environment.productApi;
  constructor(private http: HttpClient) { }


 calculatePrice(params: any) {
    return this.http.post(environment.apiUrl + this.priceApi + `/totalPriceCalculation`, params);
  }

  orderWrite(params: any) {
    return this.http.post(environment.apiUrl + this.priceApi + `/orderWrite`, params);
  }
}
