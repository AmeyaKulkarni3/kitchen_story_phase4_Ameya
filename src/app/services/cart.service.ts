import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = new Cart();

  constructor() {}

  addItemToCart(item: Item) {
    if (this.cart.id === 0) {
      this.cart.id = 1;
      this.cart.items.set(item, 1);
      this.cart.total += item.price;
    } else {
      if(this.cart.items.has(item)){
        this.cart.items.set(item,this.cart.items.get(item) + 1);
      } else {
        this.cart.items.set(item, 1);
      }
      this.cart.total += item.price;
    }
  }
}
