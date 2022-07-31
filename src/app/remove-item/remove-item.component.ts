import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Item } from '../model/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.css']
})
export class RemoveItemComponent implements OnInit {

  @Input() itemRecieved : Item;

  constructor(public modalRef : BsModalRef, private itemService : ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.itemService.removeItem(this.itemRecieved.id);
    this.modalRef.hide();
  }

}
