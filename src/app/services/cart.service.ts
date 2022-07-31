import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { Cart } from '../model/Cart';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = new Cart();

  cartObservable = new Subject<Cart>();
  cartObs = this.cartObservable.asObservable();

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

    this.cartObservable.next(this.cart);

  }

  removeItemFromCart(item:Item){
    
    this.cart.items.forEach((value,key) => {
      if(key.id === item.id){
        this.cart.items.set(key,value-1);
      }
      this.cart.total -= key.price;
    });
    this.cartObservable.next(this.cart);
  }

  completePurchase(){
    this.cart = new Cart();
    this.cartObservable.next(this.cart);
  }
}
