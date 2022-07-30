import { Category } from './Category';
import { unitOfMeasure } from './UnitOfMeasure';

export class Item {
  id: number = 0;
  quantity: number = 0;
  name: string = '';
  imageUrl: string = '';
  price: number = 0;
  category: string = '';
  unitOfMeasure: string = '';

  constructor() {}
}
