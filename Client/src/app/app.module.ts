import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';


import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
 
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RouterModule,
    HomeModule,
    BrowserAnimationsModule,
    FormsModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
