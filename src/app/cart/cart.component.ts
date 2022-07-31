import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { Item } from '../model/Item';
import { CartService } from '../services/cart.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PurchaseComponent } from '../purchase/purchase.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart = new Cart();

  modalRef!: BsModalRef;

  constructor(
    private cartService: CartService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.cartService.cartObs.subscribe((c) => {
      this.cart = c;
    });
  }

  onRemoveItem(item: Item) {
    this.cartService.removeItemFromCart(item);
  }

  onPurchase(){
    this.modalRef = this.modalService.show(PurchaseComponent);
  }
}
