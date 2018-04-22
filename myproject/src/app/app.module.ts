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
import { ClientsComponent } from './clients/clients.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewclientComponent } from './newclient/newclient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewAppComponent } from './new-app/new-app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AvailabilityComponent } from './availability/availability.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpdateAvailComponent } from './update-avail/update-avail.component';
import { GdprComponent } from './gdpr/gdpr.component';




const appRoutes:Routes = [
  {
    path: 'app-welcome',
    component: WelcomeComponent
  },
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
    path: 'app-availability',
    component: AvailabilityComponent
  },
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    canActivate: [],
    component: DashboardComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path:'appointments',
    component: AppointmentsComponent
  },
  {
    path:'newclient',
    component: NewclientComponent
  },
  {
    path:'app-new-app',
    component: NewAppComponent
  },
  {
    path:'app-user-dashboard',
    component:  UserDashboardComponent
  },
  {
    path:'app-update-avail',
    component:  UpdateAvailComponent
  },


 
  
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
    NewclientComponent,
    WelcomeComponent,
    NewAppComponent,
    UserDashboardComponent,
    AvailabilityComponent,
    UpdateAvailComponent,
    GdprComponent

    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot() ,
    NgbModule.forRoot()
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }