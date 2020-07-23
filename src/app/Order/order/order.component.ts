import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Cart } from '../cart.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
products = [];
items = [
  {id: 1, value: 'Penguin Ears'},
  {id: 2, value: 'Horse Shoe'}
];
config = {
  displayKey: 'value',
};
addCartForm = this.fb.group({});
totalPrice: number;
cartItems: Array<Cart> = [];
totalAmount = 0;
SelectedValues: any;
  constructor(private service: OrderService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

resetForm() {
  this.addCartForm = this.fb.group({
    product: ['', [Validators.required]],
    units: ['', [Validators.required]]
  });
}

  addToCart() {
  if (this.addCartForm.valid) {
    if (this.cartItems.length > 0) {
      if (!this.cartItems.some(x => x.productId === this.addCartForm.value.product.id )) {
        this.calculatePrice(this.addCartForm.value.units, this.addCartForm.value.product.id, this.addCartForm.value.product.value);
        this.toastr.success('Item added!');
        this.resetForm();
        this.addCartForm.markAsTouched();
        this.SelectedValues = [];
        this.items = [...this.items];
      } else {
        const map = this.cartItems.filter(x => x.productId === this.addCartForm.value.product.id)[0];
        const updatedUnits = map.units + this.addCartForm.value.units;
        this.calculatePrice(updatedUnits, map.productId, map.productName);
        this.toastr.success('Item updated');
        this.resetForm();
        this.addCartForm.markAsTouched();
        this.SelectedValues = [];
        this.items = [...this.items];
    }
    } else {
      this.calculatePrice(this.addCartForm.value.units, this.addCartForm.value.product.id, this.addCartForm.value.product.value);
      this.toastr.success('Item added!');
      this.resetForm();
      this.addCartForm.markAsTouched();
      this.SelectedValues = [];
      this.items = [...this.items];
    }
  } else {
    this.toastr.error('Error happen! Try Again Later');
  }
  }

calculatePrice(units, productId, productName) {
    const params = {
      'productId': productId,
      'units': units
    };
    this.service.calculatePrice(params).subscribe((data: any) => {
      if (data.status === 'OK') {
        this.totalPrice = data.payload;
        if (this.cartItems.some(x => x.productId === productId)) {
          this.cartItems.map(x => {
            if (x.productId === productId){
              x.productName = productName,
              x.productId = productId,
              x.units = units,
              x.totalPrice = this.totalPrice
            }
          });
          this.getTotal();
        } else {
          this.cartItems.push({ 'productId': productId,'productName': productName, 'units': units, 'totalPrice': this.totalPrice });
          this.getTotal();
        }
      } else {
        this.toastr.error('Error happen! Try Again Later');
      }

    });
  }

  removeItem(item){
    this.cartItems = this.cartItems.filter(x => x.productId !== item.productId);
    this.getTotal();
    this.toastr.success('Item Removed from cart');
  }

  getQuantity(e, item) {
      const updatedUnits = e;
      this.calculatePrice(updatedUnits, item.productId, item.productName);
  }

  getTotal() {
    this.totalAmount = 0;
    this.cartItems.forEach(element => {
      this.totalAmount += element.totalPrice;
    });
  }

  placeOrder() {
    const params = {
      'orderItems': this.cartItems,
      'totalAmount': this.totalAmount
    };
    this.toastr.success('Order Placed Successfully !');
    this.service.orderWrite(params).subscribe((data: any) => {
      localStorage.setItem('orderData', JSON.stringify(data.payload));
      this.router.navigate(['orderSummery']);
    });
  }
}
