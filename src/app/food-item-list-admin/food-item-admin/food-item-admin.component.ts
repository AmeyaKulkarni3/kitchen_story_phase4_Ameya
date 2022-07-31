import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Item } from 'src/app/model/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-item-admin',
  templateUrl: './food-item-admin.component.html',
  styleUrls: ['./food-item-admin.component.css']
})
export class FoodItemAdminComponent implements OnInit {

  @Input() item: Item;
  @Input() index: number;

  modalRef : BsModalRef;

  constructor(private cartService : CartService, private modalService : BsModalService) { }

  ngOnInit(): void {
  }



}
