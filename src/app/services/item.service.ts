import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import items from '../../assets/food-items.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = items;

  itemObservable = new BehaviorSubject<Item[]>(this.items);
  itemObs = this.itemObservable.asObservable();

  constructor() {}

  getItems() {
    return items;
  }

  addItem(item: Item) {
    let num: number = this.items[this.items.length - 1].id;
    item.id = num + 1;
    item.imageUrl = "../../assets/img/foodPlaceholder.png";
    this.items.push(item);
    this.itemObservable.next(this.items);
  }
}
