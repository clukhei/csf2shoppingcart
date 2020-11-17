import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 
  @Input() products = []
  @Output() quantity= new EventEmitter<string>()
  constructor() { }


 
  addToCart(itemName: string) {
    console.log(itemName)
    this.quantity.emit(itemName)
   
  }


  ngOnInit(): void {
    console.log(this.products)
  }

}
