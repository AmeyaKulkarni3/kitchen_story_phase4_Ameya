import { Item } from './Item';

export class Cart {
  id: number = 0;
  items = new Map()
  total: number = 0;
  purchaseComplete:boolean = false;

  constructor() {}
}
