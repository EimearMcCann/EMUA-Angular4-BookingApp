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
import { FooterComponent } from './footer/footer.component';
import {UserService} from './user.service';
import { AuthguardGuard } from './authguard.guard';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    LoginformComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule, 
    HttpClientModule
  ],
  providers: [UserService,
  AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
