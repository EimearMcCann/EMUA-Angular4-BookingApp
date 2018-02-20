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
import { ClientsComponent } from './clients/clients.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import { UserservicesComponent } from './userservices/userservices.component';
import { DateandtimeComponent } from './dateandtime/dateandtime.component';


const appRoutes:Routes = [
  {
    path: 'userlogin',
    component: UserloginComponent
  },
  {
    path: 'loginform',
    component: LoginformComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'userservices',
    component: UserservicesComponent
  },
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path:'appointments',
    component: AppointmentsComponent
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
    ClientsComponent,
    UserloginComponent,
    RegisterComponent,
    UserservicesComponent,
    DateandtimeComponent,
    
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
