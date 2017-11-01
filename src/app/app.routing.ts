import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './user_auth/login.component';
import {SignupComponent} from './user_auth/signup.component';
import {RouterGuard} from './app.router.guard';

const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent, canActivate: [RouterGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
