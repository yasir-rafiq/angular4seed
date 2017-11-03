import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserAuth} from './user-auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  public user = {userName: 'yasir', email: 'yasir@qwe.com', password: '123213'};
  constructor() { }

  ngOnInit() {
  }
  onSignup(signUpForm: NgForm) {
    console.log(signUpForm.value);
  }
}
