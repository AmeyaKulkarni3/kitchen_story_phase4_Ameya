import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Item } from 'src/app/model/Item';
import { RemoveItemComponent } from 'src/app/remove-item/remove-item.component';
import { CartService } from 'src/app/services/cart.service';
import { UpdateItemComponent } from 'src/app/update-item/update-item.component';

@Component({
  selector: 'app-food-item-admin',
  templateUrl: './food-item-admin.component.html',
  styleUrls: ['./food-item-admin.component.css']
})
export class FoodItemAdminComponent implements OnInit {

  @Input() item: Item;
  @Input() index: number;

  public modalRef : BsModalRef;

  constructor(private cartService : CartService, private modalService : BsModalService) { }

  ngOnInit(): void {
  }

  onUpdate(item:Item){
    const config : ModalOptions = {
      initialState:{
        itemRecieved : item
      }
    }
    this.modalRef = this.modalService.show(UpdateItemComponent,config);
  }

  onRemove(item:Item){
    const config : ModalOptions = {
      initialState:{
        itemRecieved : item
      }
    }
    this.modalRef = this.modalService.show(RemoveItemComponent,config);
  }



}
