import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginClicked = true;
  isLoggedIn = false;

  a = localStorage.getItem('admin');
  b = localStorage.getItem('newUser');

  isAdmin = this.a === 'true' ? true : false;
  isNewUser = this.b === 'true' ? true : false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    console.log('in OnInit');

    this.userService.userObservable.subscribe((v) => {
      console.log(v);

      if (v === '' || v === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }

      console.log(this.isLoggedIn);
    });
    if (localStorage.getItem('user')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    console.log(this.isLoggedIn);
  }

  onLogout() {
    console.log('In logout');
    this.loginClicked = false;
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
