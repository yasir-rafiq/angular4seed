import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user_auth/login.component';
import {SignupComponent} from './user_auth/signup.component';
import {RouterGuard} from './app.router.guard';
import {HomeComponent} from './home/home.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [RouterGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [RouterGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
