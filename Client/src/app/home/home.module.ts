import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CalendarComponent } from './components/calendar/calendar.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    SettingsComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    AngularFileUploaderModule
  
  
   

  ]
})
export class HomeModule { }
