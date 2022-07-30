import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.login({email:form.value.email, password:form.value.password});
     this.router.navigate(['/home']);
  }

}
