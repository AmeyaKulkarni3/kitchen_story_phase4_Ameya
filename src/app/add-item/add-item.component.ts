import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Item } from '../model/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private modalRef : BsModalRef, private itemService : ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let item = new Item();
    item.name = form.value.itemName;
    item.category = form.value.category;
    item.price = form.value.price;
    item.unitOfMeasure = form.value.uom;
    item.quantity = form.value.quantity;
    this.itemService.addItem(item);
    this.modalRef.hide();

  }

}
