import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartArr : []
  @Output() removeItem = new EventEmitter<string>()

   

  constructor() { }
  ngOnInit(): void {}

  removeFromCart(itemName): void {
    this.removeItem.emit(itemName)
  }
}
