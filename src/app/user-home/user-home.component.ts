import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../model/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  searchClicked = false;

  searchedItems : Item[] = [];

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {
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
