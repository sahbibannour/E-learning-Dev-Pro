import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { NavbarComponent } from './Components/navbar/navbar.component';

import { UserComponent } from './user.component';
import { RegisterComponent } from './Components/register/register.component';

import { HomeuserComponent } from './Components/homeuser/homeuser.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SigninComponent } from './Components/signin/signin.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CoursesComponent } from './Components/courses/courses.component';


@NgModule({
  declarations: [
   
    NavbarComponent,
   
    UserComponent,
    RegisterComponent,
    HomeuserComponent,
    ContactComponent,
    SigninComponent,
    FooterComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
   
  ]
})
export class UserModule { }
