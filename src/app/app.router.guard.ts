import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import construct = Reflect.construct;
import {LocalStorageService} from './services/local-storage.service';
import {Injectable} from '@angular/core';
@Injectable ()
export class RouterGuard implements CanActivate {
  constructor(private localStorage: LocalStorageService, private router: Router) {}
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | boolean {
    if (this.localStorage.getStorage()) {
       this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
