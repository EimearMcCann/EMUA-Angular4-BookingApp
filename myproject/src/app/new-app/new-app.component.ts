import { Component} from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {forkJoin} from 'rxjs/observable/forkJoin';
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
              public fb         : FormBuilder)
  {

    this.load();

   

     // Create form builder validation rules
     this.form = fb.group({
        "Appointment_Service"       : ["", Validators.required],
        "Appoint_Time"           : ["", Validators.required],
        "Appoint_Date"          : ["", Validators.required],
        "Appoint_Username"       : ["", Validators.required]
        
     });
  }


  /**
   * Handle data submitted from the page's HTML form
   * Determine whether we are adding a new record or amending an
   * existing record
   */
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
        // url       : any        = this.URL + "/add";

     this.http.post(url, JSON.stringify(options), headers)
     .subscribe((data : any) =>
     {
        // If the request was successful notify the user
        this.hideForm   = true;
       // this.sendNotification(`Congratulations the user: ${username} was successfully added`);
     },
     (error : any) =>
     {
       console.log(AppointmentTime);
       console.log(error);
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


 

  load():void{
    this.http.get('http://localhost/retrieve-availAWS.php')
    .subscribe(
      (data:any[])=>{
        console.log(data);
        this.items= data;
      },
      (error:any) =>{
        console.dir(error);
      });

  


  /**
   * Manage notifying the user of the outcome of remote operations
   *
   */

 
 }}

