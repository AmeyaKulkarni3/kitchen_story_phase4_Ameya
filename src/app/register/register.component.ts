import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router : Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.userService.register({
      email: form.value.email,
      password: form.value.password,
      displayName: form.value.displayName,
    });
    this.router.navigate(['/home']);
  }
}
