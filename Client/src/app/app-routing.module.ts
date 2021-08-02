import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path:'',
    loadChildren : () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'profil',
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    UserModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
