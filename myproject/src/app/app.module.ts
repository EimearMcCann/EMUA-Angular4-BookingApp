import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppointmentsComponent } from './appointments/appointments.component';



@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    
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
