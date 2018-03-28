import { Component, ViewContainerRef} from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {forkJoin} from 'rxjs/observable/forkJoin';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent {


  // Define FormGroup property for managing form validation / data retrieval
  public form : FormGroup;

  public items : Array<any>=[];
  public times :Array<any>=[];

  //Model for managing fields
   public AppointmentService: any;
   public AppointmentTime : any;
   public AppointmentDate : any;
   public AppointmentUsername : any;

   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;

  //Flag to hide the form upon successful completion of remote operation
  public hideForm               : boolean = false;

  // xampp url testing on local host
  private baseURI   : string = "http://127.0.0.1/";


  // Initialise module classes
  constructor( public http       : HttpClient,
              public fb         : FormBuilder,
              public toastr : ToastsManager,
              vcr: ViewContainerRef )
  {

    this.toastr.setRootViewContainerRef(vcr);
   this.load();
    this.loader();

   

     // Create form builder validation rules
     this.form = fb.group({
        "Appointment_Service"       : ["", Validators.required],
        "Appoint_Time"           : ["", Validators.required],
        "Appoint_Date"          : ["", Validators.required],
        "Appoint_Username"       : ["", Validators.required]
        
     });
  }


  saveAppointment() : void
  {
     let
         AppointmentService :string= this.form.controls["Appointment_Service"].value,
         AppointmentTime   : string= this.form.controls["Appoint_Time"].value,
         AppointmentDate   : string= this.form.controls["Appoint_Date"].value,
         AppointmentUsername  : string= this.form.controls["Appoint_Username"].value;
        

     this.createAppointment( AppointmentService, AppointmentTime, AppointmentDate, AppointmentUsername);
  }

  /**
   * Save a new record that has been added to the page's HTML form
   * Use angular's http post method to submit the record data
   *
   */
  createAppointment(Appointment_Service : string, Appoint_Time: string, Appoint_Date: string, Appoint_Username: string) : void
  {

    let
    AppointmentService :string= this.form.controls["Appointment_Service"].value,
    AppointmentTime   :string= this.form.controls["Appoint_Time"].value,
    AppointmentDate  : string= this.form.controls["Appoint_Date"].value,
    AppointmentUsername   :string= this.form.controls["Appoint_Username"].value;
    

     let headers  : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
         options  : any   = { "key" : "addAppointment","Appointment_Service" : Appointment_Service, "Appoint_Time" : Appoint_Time, "Appoint_Date" : Appoint_Date,  "Appoint_Username" : Appoint_Username},
         url       : any        = this.baseURI + "manage-dataAWS.php";
  
     this.http.post(url, JSON.stringify(options), headers)
     .subscribe((data : any) =>
     {
        // If the request was successful notify the user
       //this.resetFields();
  
       
       this.toastr.success('Appointment Booked, See you Soon!');
     
     },
     (error : any) =>
     {
       console.log(AppointmentTime);
       console.log(error);
       this.toastr.error('Sorry! Appointment slot taken!!');
       this.resetTimeandDate;

       // this.sendNotification('Something went wrong!');
     });
  }




  

  /**
   * Clear values in the page's HTML form fields
   *
   */
  resetFields() : void
  {
  
 
     this.AppointmentService    = ""; 
     this.AppointmentTime   = "";
     this.AppointmentDate   = "";
     this.AppointmentUsername    = "";
  }
  resetTimeandDate() : void
  {
  
     this.AppointmentTime   = "";
     this.AppointmentDate   = "";
  
  }
  refresh(){
    window.location.reload();
    
  
  }

  load() {

    let 
     headers: any = new HttpHeaders({'Content-Type': 'application/json'}),
     options: any = {"key": "getAvail", "Appointment_Date": this.AppointmentDate},
     url: any = this.baseURI + "/manage-dataAWS.php";

     this.http.post(url, JSON.stringify(options), headers)
     .subscribe((data:any)=>{

      console.dir(data);
      this.items=data;

     },
     (error: any) => {
       console.log('ERROR, Something went wrong!!!');
     
     });
  }
 

  loader():void{
    this.http.get('http://localhost/retrieve-availAWS.php')
    .subscribe(
      (data:any[])=>{
        console.log(data);
        this.items= data;
      },
      (error:any) =>{
        console.dir(error);
      });
  }/*

  loader():void{
    this.http.get('http://localhost/retrieve_TimeAWS.php')
    .subscribe(
      (data:any[])=>{
        console.log(data);
        this.times= data;
      },
      (error:any) =>{
        console.dir(error);
      });
  */


  /**
   * Manage notifying the user of the outcome of remote operations
   *
   */

 
 }

