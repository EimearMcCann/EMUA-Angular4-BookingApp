import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent {


  // Define FormGroup property for managing form validation / data retrieval
  public form : FormGroup;

  //Model for managing fields
   public AppointmentName : any;
   public AppointmentService: any;
   public AppointmentTime : any;
   public AppointmentDate : any;

   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;

  //Flag to hide the form upon successful completion of remote operation
  public hideForm               : boolean = false;

  // xampp url testing on local host
  private baseURI   : string = "http://127.0.0.1/";


  // Initialise module classes
  constructor( public http       : HttpClient,
              public fb         : FormBuilder,
           )
  {

   

     // Create form builder validation rules
     this.form = fb.group({
        "Appointment_Name"       : ["", Validators.required],
        "Appointment_Service"       : ["", Validators.required],
        "Appointment_Time"           : ["", Validators.required],
        "Appointment_Date"          : ["", Validators.required]
        
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
         AppointmentName  : string= this.form.controls["Appointment_Name"].value,
         AppointmentService : string= this.form.controls["Appointment_Service"].value,
         AppointmentTime   : string= this.form.controls["Appointment_Time"].value,
         AppointmentDate   : string= this.form.controls["Appointment_Date"].value;
        

     this.createAppointment(AppointmentName, AppointmentService, AppointmentTime, AppointmentDate);
  }

  /**
   * Save a new record that has been added to the page's HTML form
   * Use angular's http post method to submit the record data
   *
   */
  createAppointment(Appointment_Name: string, Appointment_Service : string, Appointment_Time: string, AppointmenDate: string) : void
  {

    let
    AppointmentName   :string= this.form.controls["Appointment_Name"].value,
    AppointmentService :string= this.form.controls["Appointment_Service"].value,
    AppointmentTime   :string= this.form.controls["Appointment_Time"].value,
    AppointmentDate  : string= this.form.controls["Appointment_Date"].value;
    

     let headers  : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
         options  : any   = { "key" : "addAppointment", "Appointment_Name" : Appointment_Name, "Appointment_Service" : Appointment_Service, "Appointment_Time" : Appointment_Time, "Appointment_Date" : AppointmenDate},
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
  
     this.AppointmentName    = "";
     this.AppointmentService    = ""; 
     this.AppointmentTime   = "";
     this.AppointmentDate   = "";
  }
  


  /**
   * Manage notifying the user of the outcome of remote operations
   *
   */

 
 }
