import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent  {


  // Define FormGroup property for managing form validation / data retrieval
  public form : FormGroup;
  public items : Array<any> =[];

  //Model for managing fields
   public appointmentDate : any;
   public appointmentTime : any;
 

   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;

  //Flag to hide the form upon successful completion of remote operation
  public hideForm               : boolean = false;

  // xampp url testing on local host
  private baseURI   : string = "http://127.0.0.1/";


  // Initialise module classes
  constructor( public http       : HttpClient,
              public fb         : FormBuilder )
           
  {
    this.load();

   

     // Create form builder validation rules
     this.form = fb.group({
        "Appointment_Date"       : ["", Validators.required],
        "Appointment_Time"       : ["", Validators.required]
     });
  }


  /**
   * Handle data submitted from the page's HTML form
   * Determine whether we are adding a new record or amending an
   * existing record
   */
  saveAvail() : void
  {
     let
         appointmentDate   : string    = this.form.controls["Appointment_Date"].value,
         appointmentTime  : string    = this.form.controls["Appointment_Time"].value

     this.addAvail(appointmentDate, appointmentTime );
  }

  /**
   * Save a new record that has been added to the page's HTML form
   * Use angular's http post method to submit the record data
   *
   */
  addAvail(Appointment_Date : string, Appointment_Time : string) : void
  {

    let
    appointmentDate   : string    = this.form.controls["Appointment_Date"].value,
    appointmentTime  : string    = this.form.controls["Appointment_Time"].value

    

     let headers  : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
         options  : any   = { "key" : "addAvail", "Appointment_Date" : Appointment_Date, "Appointment_Time" : Appointment_Time },
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
       console.log(Appointment_Date);
       console.log(error);
       // this.sendNotification('Something went wrong!');
     });
     
  }
  ionViewWillEnter() : void{
    this.load();
  }
  load() : void{
    this.http

    .get('http://localhost/retrieve-availAWS.php')
    .subscribe((data : any) =>
  {
    console.dir(data);
    this.items = data;
  },
  (error : any) =>{
    console.dir(error);
  });
  }

myFunction(){
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table=document.getElementById("myTable");
  tr=table.getElementByTagName("tr");
  for (i=0; i<tr.length; i++) {
    td=tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display="";
      } else {
        tr[i].style.display="none";
      }
    }
  }
  }


}
