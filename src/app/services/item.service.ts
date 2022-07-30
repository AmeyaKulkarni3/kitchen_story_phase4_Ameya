import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import items from "../../assets/food-items.json";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items : Item[] = items;

  constructor() { }

  getItems(){
    return items;
  }
}
