import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NewsComponent } from './Components/news/news.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'news',
        component:NewsComponent,
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
