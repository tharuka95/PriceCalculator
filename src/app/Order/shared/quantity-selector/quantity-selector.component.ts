import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent implements OnInit {
  @Input() quantity = 1;
  @Input() disabled = false;

  @Output() quantityEmit: any = new EventEmitter<any>();

  maxValue = 99999;
  constructor() { }

  ngOnInit(): void {
    this.quantity = +this.quantity;
  }

  add() {
    if (this.quantity < this.maxValue) {
      ++this.quantity;
      this.emitChange();
    }
  }

  subtract() {
    if (this.quantity !== 0) {
      --this.quantity;
    }
    this.emitChange();
  }

  emitChange() {
    this.quantityEmit.emit(+this.quantity);
  }

  _keyPress(event: any, quantity) {
    if (event.charCode !== 0) {
      const pattern = /[0-9\ ]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }

      if (quantity.toString().length >= 5) {
        event.preventDefault();
      }
    }
  }
}
