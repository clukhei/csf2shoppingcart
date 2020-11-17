import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() itemName: String 
  @Input() itemImgUrl: String 
  @Output() quantity= new EventEmitter<string>()
  constructor() { }


 
  addToCart(itemName: string) {
    this.quantity.emit(itemName)
   
  }


  ngOnInit(): void {
  }

}
