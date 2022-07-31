import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserModel } from '../model/UserModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user : UserModel;

  constructor(private modalRef : BsModalRef, private userService : UserService) { }

  ngOnInit(): void {
    let userString = this.userService.getLoggedInUser() || "";
    this.user = JSON.parse(userString);
  }

  onChange(form : NgForm){
    this.userService.changePassword(form.value.password);
    this.modalRef.hide();
  }

}
