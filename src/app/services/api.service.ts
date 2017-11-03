import {UserAuth} from '../user_auth/user-auth';
import {LocalStorageService} from './local-storage.service';
import {Injectable} from '@angular/core';

@Injectable ()
export class ApiService {
  constructor(private localStorage: LocalStorageService) {}
  Login (data: UserAuth) {
    this.localStorage.setStorage('1234567890');
  }
  Logout () {
    this.localStorage.clearStorage();
  }
}
