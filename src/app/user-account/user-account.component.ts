import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserService } from '../services/user.service';
import { StorageContants } from '../shared/contants';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private userService : UserService) { }

  loggedInUser= JSON.parse(localStorage.getItem(StorageContants.USER)!);
     
  username = this.loggedInUser.displayName;

  ngOnInit(): void {

  }

}
