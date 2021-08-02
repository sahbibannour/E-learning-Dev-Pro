import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
 
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RouterModule,
    HomeModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
