import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user_auth/login.component';
import { SignupComponent } from './user_auth/signup.component';
import { DropdownDirective } from './directives/dropdown.directive';
import {routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterGuard} from './app.router.guard';
import { HomeComponent } from './home/home.component';
import {LocalStorageService} from './services/local-storage.service';
import {ApiService} from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DropdownDirective,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [RouterGuard, LocalStorageService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
