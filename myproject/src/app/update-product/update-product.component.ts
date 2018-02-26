import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent  {


  
    // Define FormGroup property for managing form validation / data retrieval
    public form : FormGroup;
  
    //Model for managing fields
   public userID : any ;
     public username : any;
     public password : any;
     public name : any;
     public email : any;
     public phone : any;
  
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
         "userID"         : ["", Validators.required],
          "uName"       : ["", Validators.required],
          "pWord"       : ["", Validators.required],
          "fName"           : ["", Validators.required],
          "eMail"          : ["", Validators.required],
          "pphone"          : ["", Validators.required]
       });
    }



selectEntry(item : any) : void{
  this.userID = item.userID;
  this.username = item.uName;
  this.password = item.pWord;
  this.name = item.fName;
  this.email = item.eMail;
  this.phone= item.pphone;

}




    saveUser() : void
    {
       let
          userID  : string = this.form.controls["userID"].value,
           uName   : string    = this.form.controls["uName"].value,
           pWord   : string    = this.form.controls["pWord"].value,
           fName   : string = this.form.controls["fName"].value,
           eMail   : string    = this.form.controls["eMail"].value,
           pphone  : string    = this.form.controls["pphone"].value;

           this.updateUser(userID, uName, pWord, fName, eMail, pphone);

    }  
  
  
    
    updateUser(userID : string, uName : string, pWord : string, fName: string, eMail: string, pphone: string) : void
    {    
      
       let headers  : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
           options  : any   = { "key" : "update", "username" : uName, "password" : pWord, "name" : fName, "email" : eMail, "phone": pphone, "userID" : userID },
           url       : any        = this.baseURI + "manage-dataAWS.php";
      
  
       this.http.post(url, JSON.stringify(options), headers)
       .subscribe((data : any) =>
       {
          // If the request was successful notify the user
          this.hideForm   = true;
          console.log(uName);
         // this.sendNotification(`Congratulations the user: ${username} was successfully added`);
       },
       (error : any) =>
       {
        console.log(uName);
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
       // this.userID = "";
       this.username    = "";
       this.password   = "";
       this.name   = ""; 
       this.email    = "";
       this.phone    = "";
    }
  
  isFieldValid(field: string){
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field:string){
    return {
      'has error':this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)

    };
  }
    /**
     * Manage notifying the user of the outcome of remote operations
     *
     */
  
   
   }
  