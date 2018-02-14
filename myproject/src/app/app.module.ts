import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    LoginformComponent,
    HeaderComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
