import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private api: ApiService, private localStorage: LocalStorageService) {}
  logOut() {
    this.api.Logout();
  }
  isToken() {
   if (this.localStorage.getStorage()) {
     return false;
   } else {
     return true;
   }
  }
}
