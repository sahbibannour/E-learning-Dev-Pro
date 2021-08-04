import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { CoursesComponent } from './Components/courses/courses.component';

import { HomeuserComponent } from './Components/homeuser/homeuser.component';


import { RegisterComponent } from './Components/register/register.component';
import { SigninComponent } from './Components/signin/signin.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'login',
        component:SigninComponent,
      },
      {
        path:'courses',
        component:CoursesComponent,
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'',
        component:HomeuserComponent
      },
      {
        path:'contact',
        component:ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
