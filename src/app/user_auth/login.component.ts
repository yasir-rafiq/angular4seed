import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {LocalStorageService} from '../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private apiService: ApiService, private localStorage: LocalStorageService, private router: Router) {
    // this.apiService.Login({userName: 'yasir', password: '123213'});
  }
  // this.localStorage.setStorage('1234567890');
  onLogin(signUpForm: NgForm): void {
    if (signUpForm.valid) {
      this.apiService.Login(signUpForm.value).subscribe(
        (data: Response) => {
          if (data.status === 200) {
            this.localStorage.setStorage('1234567890');
            this.router.navigate(['/']);
          }
        }
      );
    }
  }
}
