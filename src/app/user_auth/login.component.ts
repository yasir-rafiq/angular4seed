import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private apiService: ApiService) {
    // this.apiService.Login({userName: 'yasir', password: '123213'});
  }

}
