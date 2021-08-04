import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';

import { HomeuserComponent } from './Components/homeuser/homeuser.component';

import { NewsComponent } from './Components/news/news.component';
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
        path:'news',
        component:NewsComponent,
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
