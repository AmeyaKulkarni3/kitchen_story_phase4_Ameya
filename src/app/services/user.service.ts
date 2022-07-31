import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../model/Cart';
import { CartItem } from '../model/CartItem';
import { Order } from '../model/Order';
import { UserModel } from '../model/UserModel';
import { StorageContants } from '../shared/contants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserModel = new UserModel();

  isNewUser:boolean = false;
  isAdmin:boolean = false;

  userObservable = new BehaviorSubject<string>(localStorage.getItem(StorageContants.USER)||"");
  userObs = this.userObservable.asObservable();
  generalObservable = new Subject<string>();

  constructor(){
    this.start();
  }

  start(): void{
    console.log("in start()");
    
    window.addEventListener("storage",this.storageEventListener.bind(this));
  }

  private storageEventListener(event : StorageEvent){
    console.log("in storageEventListener()");
    
    if(event.storageArea === localStorage){
      let storedUser : UserModel;
      this.generalObservable.next(JSON.stringify(event.newValue));
    }
  }

  login(data : any){
    this.user.id = 1;
    let s = data.email;
    let temp = s.split("@");
    this.user.displayName = temp[0];
    this.user.email = data.email;
    this.user.password = data.password;
    this.user.address = "Home Address";
    this.user.balance = 10000;
    this.user.orders = [];
    if(this.user.email === "admin@1"){
      this.isAdmin = true;
    }
    localStorage.setItem(StorageContants.USER,JSON.stringify(this.user));
    localStorage.setItem(StorageContants.ADMIN,this.isAdmin.toString());
    this.userObservable.next(localStorage.getItem(StorageContants.USER) || "");
  }

  register(data : any){
    this.user.id = 1;
    this.user.displayName = data.displayName;
    this.user.email = data.email;
    this.user.password = data.password;
    this.user.address = "Home Address";
    this.user.balance = 10000;
    this.user.orders = [];
    this.isNewUser = true;
    localStorage.setItem(StorageContants.USER,JSON.stringify(this.user));
    localStorage.setItem(StorageContants.ADMIN,this.isAdmin.toString());
    this.userObservable.next(localStorage.getItem(StorageContants.USER) || "");
  }

  isUserLoggedIn(){
    const storedUser= JSON.parse(localStorage.getItem("user")!);
    if(storedUser === null){
      return false;
    }
    return true;
  }

  getLoggedInUser(){
    var loggedInUserString;
    for(let i = 0; i < localStorage.length; i++){
      if(localStorage.key(i) === StorageContants.USER){
        loggedInUserString = localStorage.getItem(localStorage.key(i)!);
      }
    }
    return loggedInUserString;
  }

  logout(){
    localStorage.clear();
    window.removeEventListener("storage", this.storageEventListener.bind(this));
    this.userObservable.next("");
    this.userObservable.complete();
  }

  addOrder(cart : Cart){
    var cartItems : CartItem[] = [];
    let items = cart.items;
    items.forEach((value,key) => {
      let c : CartItem = new CartItem();
      c.itemName = key.name;
      c.quantity = value;
      c.total = value * key.price;
      cartItems.push(c);
    });

    let order : Order = new Order();
    if(this.user.orders.length === 0){
      order.id = 1;
    } else {
      order.id += 1;
    }
    order.date = new Date();
    order.cart = cartItems;
    order.orderValue = cart.total;
    this.user.orders.push(order);
    this.user.balance -= cart.total;
    console.log(this.user);
    localStorage.setItem(StorageContants.USER,JSON.stringify(this.user));
    this.userObservable.next(localStorage.getItem(StorageContants.USER) || "");
  }

  changePassword(passowrd : string){
    this.user.password = passowrd;
    localStorage.setItem(StorageContants.USER,JSON.stringify(this.user));
    this.userObservable.next(localStorage.getItem(StorageContants.USER) || "");
  }
}
