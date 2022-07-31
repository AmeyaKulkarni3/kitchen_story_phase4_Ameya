import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Cart } from '../model/Cart';
import { UserModel } from '../model/UserModel';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  cart: Cart = new Cart();
  user :UserModel = new UserModel();

  constructor(
    public modalRef: BsModalRef,
    private cartService: CartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    let userString = this.userService.getLoggedInUser() || "";
    this.user = JSON.parse(userString);
  }

  onConfirm(){
    this.modalRef.hide();
    this.userService.addOrder(this.cart);
    this.cartService.completePurchase();
  }
}
