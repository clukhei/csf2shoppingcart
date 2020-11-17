import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {List} from '../../list'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() itemName: string
  @Input() itemQty: number
  @Input() itemUrl: string
  @Output() removeItem = new EventEmitter<string>()

   

  constructor() { }
  ngOnInit():void {
    console.log(this.itemUrl)
  }
  ngDoChange():void {
    console.log(this.itemUrl)
  }

  removeFromCart(): void {
    this.removeItem.emit(this.itemName)
  }
}
