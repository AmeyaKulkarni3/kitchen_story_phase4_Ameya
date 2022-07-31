import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Item } from '../model/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  @Input() itemRecieved : Item;

  constructor(public modalRef : BsModalRef, private itemService : ItemService) { }

  ngOnInit(): void {
     
  }

  onSubmit(form:NgForm){
    console.log(form);
    this.itemRecieved.name = form.value.name;
    this.itemRecieved.category = form.value.category;
    this.itemRecieved.price = form.value.price;
    this.itemRecieved.quantity = form.value.quantity;
    this.itemRecieved.unitOfMeasure = form.value.uom;
    console.log(this.itemRecieved);
    this.itemService.updateItem(this.itemRecieved);
    
    
    this.modalRef.hide();
    
  }
}
