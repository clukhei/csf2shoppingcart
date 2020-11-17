import { Component } from '@angular/core';
import { compileFunction } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf2shoppingcart';

  itemArray: any[] = [{name: "Apple Laptop", img: "assets/img/apple.jpg"}, 
  {name: "Samsung Laptop", img: "assets/img/samsung.jpg"},
  {name: "Xiaomi Laptop", img: "assets/img/xiaomi.jpg"}]


  cartMap = new Map<string, number>()
  cartArr = []

  getLaptop(name) {
    let count = 1
    const imgUrl = this.itemArray.find(i=> name===i.name)
 
    if (this.cartMap.has(name)) {
      this.cartMap.set(name, this.cartMap.get(name)+1)
      const indexOfLaptop = this.cartArr.findIndex(e=> e.name === name)
     this.cartArr[indexOfLaptop].qty = this.cartMap.get(name)
    } else {
      this.cartMap.set(name, count)
      this.cartArr.push({name: name, qty: this.cartMap.get(name), url:imgUrl.img})
    }
   
    console.log(this.cartMap)
    console.log(this.cartArr)
  }

}
