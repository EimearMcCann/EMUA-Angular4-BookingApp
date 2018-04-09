import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppointmentsComponent } from './appointments/appointments.component';
import { FireloginComponent } from './firelogin/firelogin.component';
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
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewclientComponent } from './newclient/newclient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewAppComponent } from './new-app/new-app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AvailabilityComponent } from './availability/availability.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard} from './services/auth-guard.service';








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
    canActivate: [AuthGuard],
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
    path:'app-firelogin',
    component:  FireloginComponent
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
    NewclientComponent,
    WelcomeComponent,
    NewAppComponent,
    UserDashboardComponent,
    AvailabilityComponent,
    FireloginComponent

    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    ToastModule.forRoot() ,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [UserService,
  AuthguardGuard,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const AppRoutes = RouterModule.forRoot(appRoutes);
