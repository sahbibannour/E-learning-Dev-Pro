import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewsComponent } from './Components/news/news.component';
import { UserComponent } from './user.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    NewsComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
