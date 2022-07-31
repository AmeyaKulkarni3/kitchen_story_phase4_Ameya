import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { Order } from 'src/app/model/Order';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input() order!: Order;
  @Input() index!: number;

  cartItems: CartItem[] = [];
  orderDate: string = '';
  

  constructor(private userService: UserService) {}

  address = JSON.parse(this.userService.getLoggedInUser() || '').address;

  ngOnInit(): void {
    this.cartItems = this.order.cart;
    console.log(this.order.date);
    this.orderDate = this.order.date.toString().substring(0,10);
    
  }
}
