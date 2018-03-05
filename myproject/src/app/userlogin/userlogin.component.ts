import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

   // Define FormGroup property for managing form validation / data retrieval
   public authForm                  : FormGroup;

    //Model for managing fields
    public uName         : any;
    public pWord         : any;
    public fName         : any;
    public eMail        : any;

     //Property to store the recordID for when an existing entry is being edited
  public userID               : any      = null;
  private baseURI   : string = "http://127.0.0.1/";


    // Flag to be used for checking whether we are adding/editing an entry
    public isEdited               : boolean = false;

   //Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   public items : Array<any> =[];

  
  
  
  constructor(public http : HttpClient, public Http: Http,  public router: Router, 
    public fb : FormBuilder, 
  
  ) {
    // validators for username and password fields
    this.authForm = fb.group({
      username: ['', Validators],
      password: ['', Validators]
  });

  }
  onSubmit(value: any): void { 
    if(this.authForm.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
    
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
        options 	: any		= {"key":"validateUser", "username" : value.username, "password" : value.password},
       url       : any    = this.baseURI + "manage-dataAWS.php";

   this.http.post(url, JSON.stringify(options), headers)
   .subscribe((data : any) =>
   {
      // If the request was successful notify the user
      this.hideForm   = true;
      this.router.navigate(['app-user-dashboard']);
   },
   (error : any) =>
   {
     console.log(value.username);
     console.log(error);
   });
  }
}

   /**
   * Triggered when template view is about to be entered
   * Determine whether we adding or editing a record
   * based on any supplied navigation parameters
   */
  

  /**
   * Assign the navigation retrieved data to properties
   * used as models on the page's HTML form
   *
   */
  selectEntry(item : any) : void
  {
     this.userID = item.user_id;
     this.uName = item.username;
     this.pWord = item.password;
     this.fName= item.name;
     this.eMail = item.email;
  }

  /**
   * Clear values in the page's HTML form fields
   *
   */
  resetFields() : void
  {
     this.uName    = "";
     this.pWord    = "";
    
  }

  /**
   * Manage notifying the user of the outcome of remote operations
   *
   */
  /*sendNotification(message : string)  : void
  {
     let notification = this.toastCtrl.create({
         message       : message,
         duration      : 3000
     });
     notification.present();
  }*/

  // verify credentials for login
  logInUser(username, password){
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= { "key" : "validateUser", "username" : username, "password" : password},
    url       : any      	= this.baseURI + "manage-dataAWS.php";
  
  this.http
  .post(url, JSON.stringify(options), headers)
  .subscribe(data =>
  {
   // If the request was successful notify the user
   // and open select store page
   this.hideForm  =  true;
   this.router.navigate(['app-user-dashboard']);
   this.resetFields();
  },
  (error : any) =>
  {
    console.log(password);
   this.resetFields();
  });
  }
  
    
  }





 /*ngOnInit() {
  }
  loginaUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username =='user' && password =='user'){
      this.user.setUserLoggedIn();
      this.router.navigate(['app-user-dashboard']);
  }
}*/
