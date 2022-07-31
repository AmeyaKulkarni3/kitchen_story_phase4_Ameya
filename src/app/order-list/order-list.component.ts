import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from '../model/Order';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders : Order[];

  usr : string = "";

  private userServiceSubscription! : Subscription;

  constructor(private userService : UserService) {
    
   }
  

  ngOnInit(): void {

    this.userServiceSubscription = this.userService.userObs.subscribe(o => {
      this.usr = o;
      let user = JSON.parse(o);
      this.orders = user.orders;
      console.log(this.orders);
      
    })
  }

  ngOnDestroy(): void {
    this.userServiceSubscription.unsubscribe();
  }

}
