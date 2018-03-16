import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent {


  // Define FormGroup property for managing form validation / data retrieval
  public form : FormGroup;

  //Model for managing fields
   public uName : any;
   public pWord : any;
   public fName : any;
   public eMail : any;
   public pphone : any;

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
              vcr: ViewContainerRef)
           
  {
    

   

     // Create form builder validation rules
     this.form = fb.group({
        "username"       : ["", Validators.required],
        "password"       : ["", Validators.required],
        "name"           : ["", Validators.required],
        "email"          : ["", Validators.required],
        "phone"          : ["", Validators.required]
     });
     this.toastr.setRootViewContainerRef(vcr);
    }
      
    showSuccess() {
      this.toastr.success('You are awesome!', 'Success!');
    }
    showError() {
      this.toastr.error('This is not good!', 'Oops!');
    }
    showWarning() {
      this.toastr.warning('You are being warned.', 'Alert!');
    }
    showInfo() {
      this.toastr.info('Just some information for you.');
    }
    
    showCustom() {
      this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    }
  


  /**
   * Handle data submitted from the page's HTML form
   * Determine whether we are adding a new record or amending an
   * existing record
   */
  saveUser() : void
  {
     let
         uName   : string    = this.form.controls["username"].value,
         pWord   : string    = this.form.controls["password"].value,
         fName   : string = this.form.controls["name"].value,
         eMail   : string    = this.form.controls["email"].value,
         pphone  : string    = this.form.controls["phone"].value;

     this.createUser(uName, pWord, fName, eMail, pphone );
  }

  /**
   * Save a new record that has been added to the page's HTML form
   * Use angular's http post method to submit the record data
   *
   */
  createUser(username : string, password : string, name: string, email: string, phone: string) : void
  {

    let
    uName   : string    = this.form.controls["username"].value,
    pWord   : string    = this.form.controls["password"].value,
    fName   : string    = this.form.controls["name"].value,
    eMail   : string    = this.form.controls["email"].value,
    pphone   : string    = this.form.controls["phone"].value;
    

     let headers  : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
         options  : any   = { "key" : "addUser", "username" : username, "password" : password, "name" : name, "email" : email, "phone": phone },
         url       : any        = this.baseURI + "manage-dataAWS.php";
        // url       : any        = this.URL + "/add";

     this.http.post(url, JSON.stringify(options), headers)
     .subscribe((data : any) =>
     {
      this.toastr.success( 'New Client Added!!');
        this.resetFields();
       // this.sendNotification(`Congratulations the user: ${username} was successfully added`);
     },
     (error : any) =>
     {
       console.log(username);
       console.log(error);
       this.toastr.error('Username Taken!, Try another username..');
       this.resetUser();

       // this.sendNotification('Something went wrong!');
     });
  }


  /**
   * Clear values in the page's HTML form fields
   *
   */
  resetFields() : void
  {
     this.uName    = "";
     this.pWord    = "";
     this.fName    = ""; 
     this.eMail    = "";
     this.pphone    = "";
  }

  resetUser(): void{
    this.uName="";
  }


  /**
   * Manage notifying the user of the outcome of remote operations
   *
   */

 
 }
