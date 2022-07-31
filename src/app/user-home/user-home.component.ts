import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../model/Item';
import { UserModel } from '../model/UserModel';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import { StorageContants } from '../shared/contants';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  searchClicked = false;

  searchedItems : Item[] = [];
  

  constructor(private itemService : ItemService, private userService:UserService) { }

  loggedInUser = JSON.parse(this.userService.getLoggedInUser() || "");

  admin = localStorage.getItem(StorageContants.ADMIN);

  isAdmin = this.admin === "true" ? true : false;

  ngOnInit(): void {
    this.userService.userObs.subscribe(user => {
      this.loggedInUser = JSON.parse(user);
    })
    console.log(this.loggedInUser);
    console.log(this.loggedInUser.orders);
    
    
  }

  onSubmit(form : NgForm){
    this.searchClicked = true;
    var searchName = form.value.search;
    var items:Item[]= this.itemService.getItems();
    this.searchedItems = items.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()));    
  }

  onBack(){
    this.searchClicked = false;
  }

}
