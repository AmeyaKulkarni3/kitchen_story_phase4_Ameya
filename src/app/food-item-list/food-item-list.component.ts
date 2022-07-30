import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {

  @Input() searchedItems : Item[] = [];
  @Input() searchClicked : boolean = false;
  foodItems! : Item[];

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {

    this.foodItems = this.itemService.getItems();
  }

}
