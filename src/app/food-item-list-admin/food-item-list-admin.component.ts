import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-food-item-list-admin',
  templateUrl: './food-item-list-admin.component.html',
  styleUrls: ['./food-item-list-admin.component.css']
})
export class FoodItemListAdminComponent implements OnInit {

  items : Item[];

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {

    // this.items = this.itemService.getItems();
    this.itemService.itemObs.subscribe(its => {
      this.items = its;
    })
  }

}
