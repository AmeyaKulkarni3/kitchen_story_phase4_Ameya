import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddItemComponent } from '../add-item/add-item.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onChangePassword(){
    this.modalRef = this.modalService.show(ChangePasswordComponent);
  }

  onAddItem(){
    this.modalRef = this.modalService.show(AddItemComponent);
  }

}
