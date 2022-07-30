import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() item !: Item;
  @Input() index !: number;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(item : Item){
    this.cartService.addItemToCart(item);
    console.log(this.cartService.cart);
    
  }

}
