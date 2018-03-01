import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  selectedItem = {
    userID: '',
    name: '',
    phone: '',
    username: '',
    email: ''
  };
  public items : Array<any>=[];
  Client_Fname:string='';
  ShowEditTable: boolean = false;
  EditRowID: any = '';




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


  public form : FormGroup;

  constructor(private httpClient:HttpClient,
              private router : Router,
              public fb         : FormBuilder
            ){
              
    this.load();
    
    
    this.form = fb.group({
      "userID"         : ["", Validators.required],
       "uName"       : ["", Validators.required],
       "pWord"       : ["", Validators.required],
       "fName"           : ["", Validators.required],
       "eMail"          : ["", Validators.required],
       "pphone"          : ["", Validators.required]
    });
    
    
  }
  


  
click(param, any): void
{
  
  this.router.navigate(['update-product']);
 
}
  
ionViewWillEnter() : void{
  this.load
}

  load():void{
    this.httpClient.get('http://localhost/retrieve-dataAWS.php')
    .subscribe(
      (data:any[])=>{
        console.log(data);
        this.items= data;
      },
      (error:any) =>{
        console.dir(error);
      });
      


   }

   checking(index) {
    this.selectedItem = this.items[index];
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
     
 
      this.httpClient.post(url, JSON.stringify(options), headers)
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


    /* deleteUser(username : string, password : string, name: string, email: string, phone: string) : void
  {

    let
    uName   : string    = this.form.controls["username"].value,
    pWord   : string    = this.form.controls["password"].value,
    fName   : string    = this.form.controls["name"].value,
    eMail   : string    = this.form.controls["email"].value,
    pphone   : string    = this.form.controls["phone"].value;
    

     let headers  : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
         options  : any   = { "key" : "delete", "username" : username, "password" : password, "name" : name, "email" : email, "phone": phone },
         url       : any        = this.baseURI + "manage-dataAWS.php";
        // url       : any        = this.URL + "/add";

     this.httpClient.delete(url, JSON.stringify(options), headers)
     .subscribe((data : any) =>
     {
        // If the request was successful notify the user
        this.hideForm   = true;
       // this.sendNotification(`Congratulations the user: ${username} was successfully added`);
     },
     (error : any) =>
     {
       console.log(username);
       console.log(error);
       // this.sendNotification('Something went wrong!');
     });
  }
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
  Edit(val){
    this.EditRowID=val;
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
 }

