import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent  {

  public authForm                  : FormGroup;

  //Model for managing fields
  public uName         : any;
  public pWord         : any;
  public fName         : any;
  public eMail        : any;

   //Property to store the recordID for when an existing entry is being edited

 
 private baseURI   : string = "http://localhost/";


  // Flag to be used for checking whether we are adding/editing an entry
  public isEdited               : boolean = false;

 //Flag to hide the form upon successful completion of remote operation
 public hideForm               : boolean = false;
 public buttonColor: string = '';
 public items : Array<any> =[];




  constructor(private router: Router, private user: UserService, public http :HttpClient, public toastr : ToastsManager,
    vcr: ViewContainerRef,
    public fb : FormBuilder  ) {

  

   this.toastr.setRootViewContainerRef(vcr);
     // validators for username and password fields
     this.authForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9_]{8,30}'), Validators.minLength(8), Validators.maxLength(12)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(12)])]
  });

  }
  onSubmit(value: any): void { 
    if(this.authForm.valid) {
        window.localStorage.setItem('username', value.username);
       window.localStorage.setItem('password', value.password);
    
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
        options 	: any		= {"key":"validateUser", "username" : value.username, "password" : value.password},
        //url       : any      	= this.baseURI + "SlimRestful/api/login";
       url       : any      	= this.baseURI + "manage-dataAWS.php";

   this.http.post(url, JSON.stringify(options), headers)
   .subscribe((data : any) =>
   {
      // If the request was successful notify the user
      this.hideForm   = true;
       this.toastr.success('Username!!');
      this.router.navigate(['app-user-dashboard']); 
   },
   (error : any) =>
   {
     console.log(value.username);
     console.log(error);
     this.toastr.success('Wrong Username or Password!!');
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
    
     this.uName = item.username;
     this.pWord = item.password;
     this.fName = item.name;
     this.eMail = item.email;
  }

  /**
   * Clear values in the page's HTML form fields
   *
   */
  resetFields() : void
  {
     this.uName           = "";
     this.pWord    = "";
    
  }


  
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

   this.toastr.success('Welcome');
  
  },
  (error : any) =>
  {
   // console.log(error);
    //console.log(username);
    //console.log(password);
    this.toastr.success('Wrong Username or Password!!');
   
  });

  
  }
  
}
 /* ngOnInit() {
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

