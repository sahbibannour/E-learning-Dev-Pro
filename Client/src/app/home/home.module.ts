import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
