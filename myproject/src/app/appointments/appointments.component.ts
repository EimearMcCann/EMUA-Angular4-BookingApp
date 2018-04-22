import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Input, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';




@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  selectedItem = {
    Appointment_ID: '',
    Appoint_Username: '',
    Appointment_Service: '',
    Appoint_Time: '',
    Appoint_Date : ''
    
  };

  public form : FormGroup;

  public items : Array<any> =[];
  public prods : Array<any> =[];
  public times : Array<any> =[];

  public Appointment_ID : any;
  public username : any;
   public Appointment_Service : any;
   public Appointment_Date : any;
   public Appoint_Time : any;
   
  public viewContainerRef: ViewContainerRef;

  // xampp url testing on local host
  private baseURI   : string = "http://ec2-34-244-164-69.eu-west-1.compute.amazonaws.com/";


  constructor(public http : HttpClient,
    private router : Router,
    public fb         : FormBuilder,
    public toastr : ToastsManager, viewContainerRef: ViewContainerRef,
    vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(viewContainerRef);

   
    this.load();
    //this.loader();
   // this.loading();
    
    this.form = fb.group({
      // "userID"         : ["", Validators.required],
      "Appointment_ID"       : ["", Validators.required],
     "Appointment_Service"       : ["", Validators.required],
        "Appoint_Time"           : ["", Validators.required],
        "Appoint_Date"          : ["", Validators.required],
        "Appoint_Username"        : ["", Validators.required]
      //  "pphone"          : ["", Validators.required]
     });

  }

  ionViewWillEnter() : void{
    this.load();
  //  this.loading();
   // this.loader();
  }





  load() : void{
    this.http

    .get('http://ec2-34-244-164-69.eu-west-1.compute.amazonaws.com/retrieve-AppointmentAWS1.php')
    .subscribe((data : any) =>
  {
    console.dir(data);
    this.prods = data;
  },
  (error : any) =>{
    console.dir(error);
  });
  }

  checking(index) {
    this.selectedItem = this.prods[index];
   }


   saveAppointment() : void
   {
      let
        // userID  : string = this.form.controls["userID"].value,
        Appointment_ID   : string    = this.form.controls["Appointment_ID"].value,
       // Appointment_Service   : string    = this.form.controls["Appointment_Service"].value,
        Appoint_Time   : string    = this.form.controls["Appoint_Time"].value,
        Appoint_Date   : string = this.form.controls["Appoint_Date"].value
//Appoint_Username   : string    = this.form.controls["Appoint_Username"].value
        

          this.updateAppointment(Appointment_ID, Appoint_Time, Appoint_Date);

   }  

 
   
   updateAppointment(Appointment_ID: string, Appoint_Time: string, Appoint_Date: string) : void
   {    
     
      let headers  : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options  : any   = { "key" : "unaddAppointmentOne", "Appointment_ID": Appointment_ID, "Appoint_Time" : Appoint_Time, "Appoint_Date" : Appoint_Date },
          url       : any        = this.baseURI + "manage-dataAWS1.php";
     
 
      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         console.log(Appoint_Time);
        // this.toastr.warning('User Updated!')
         this.toastr.warning('Appointment Updated!', null, { dismiss: 'controlled', showCloseButton: true});
         setTimeout(() => 
         {
             this.router.navigate(['app-new-app']);
         },
         1000);
   
        // this.sendNotification(`Congratulations the user: ${username} was successfully added`);
      },
      (error : any) =>
      {
        console.log('Error Login: ', error.message);
        this.toastr.error(`${error.message}`, null, {
          dismiss: 'controlled',
          showCloseButton: true
        });
        this.router.navigate(['appointments']);

        // this.sendNotification('Something went wrong!');
      });
     }

     

  /*loading() {

    let 
     headers: any = new HttpHeaders({'Content-Type': 'application/json'}),
     options: any = {"key": "getAvail", "Appointment_Date": this.Appointment_Date},
     url: any = this.baseURI + "/manage-dataAWS.php";

     this.http.post(url, JSON.stringify(options), headers)
     .subscribe((data:any)=>{

      console.log(data);
      this.times=data;
      console.log(this.times);

     },
     (error: any) => {
     
      console.log(error);
       console.log('ERROR, Something went wrong!!!');
     
     });
  }*/
  
 /* loader():void{
    this.http.get('http://localhost/retrieve-availAWS.php')
    .subscribe(
      (data:any[])=>{
        console.log(data);
        this.items= data;
        console.log(this.Appointment_Date);
      },
      (error:any) =>{
        console.dir(error);
      });
  }*/

  
}
  



