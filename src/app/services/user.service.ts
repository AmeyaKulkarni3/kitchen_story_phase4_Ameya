import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from '../model/UserModel';
import { StorageContants } from '../shared/contants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserModel = new UserModel();

  isNewUser:boolean = false;
  isAdmin:boolean = false;

  userObservable = new Subject<string>();
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
}
