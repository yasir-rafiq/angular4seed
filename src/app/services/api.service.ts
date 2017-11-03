import {UserAuth} from '../user_auth/user-auth';
import {LocalStorageService} from './local-storage.service';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable ()
export class ApiService {
  constructor(private localStorage: LocalStorageService, private http: Http) {}
  Login (data: UserAuth) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  Logout () {
    this.localStorage.clearStorage();
  }
}
