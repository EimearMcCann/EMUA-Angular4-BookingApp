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




  constructor(private router: Router, private user: UserService, public toastr : ToastsManager, public vcr: ViewContainerRef) { 

    this.toastr.setRootViewContainerRef(vcr);
   
  }
  

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if (username =='AndreaC' && password =='12345678'){
      this.user.setUserLoggedIn();
      this.router.navigate(['app-user-dashboard']);
    }
    if (username =='EimearMcCann' && password =='Monken.54'){
      this.user.setUserLoggedIn();
      this.router.navigate(['app-user-dashboard']);
    }
    
    else{
      this.toastr.error("Wrong Username or Password");
    }



  }

}













  /*

  public authForm                  : FormGroup;



   //Property to store the recordID for when an existing entry is being edited

 
 private baseURI   : string = "http://localhost/";


  // Flag to be used for checking whether we are adding/editing an entry
  public isEdited               : boolean = false;

 //Flag to hide the form upon successful completion of remote operation
 public hideForm               : boolean = false;
 public buttonColor: string = '';
 public items : Array<any> =[];




  constructor(private router: Router,
      public http :HttpClient, 
      public toastr : ToastsManager,
    vcr: ViewContainerRef,
    public fb : FormBuilder  ) {

  

   this.toastr.setRootViewContainerRef(vcr);
     // validators for username and password fields
     this.authForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9_]{5,30}'), Validators.minLength(5), Validators.maxLength(12)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(12)])]
  });

  }
  onSubmit(value: any): void { 
    if(this.authForm.valid) {
      
    
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
        options 	: any		= {"key":"validateUser", "username" : value.username, "password" : value.password},
        //url       : any      	= this.baseURI + "SlimRestful/api/login";
       url       : any      	= this.baseURI + "manage-dataAWS.php";

   this.http.post(url, JSON.stringify(options), headers)
   .subscribe((data : any) =>
   {
     this.hideForm=true;
      this.router.navigate(['app-user-dashboard']);
      console.log(value.username);
      console.log(value.password);
      //this.toastr.success('W,mnkn!!'); 
   },
   (error : any) =>
   { 
     console.log(value.password);
     console.log(error);
     this.toastr.error('Wrong Username or Password!!');
   });
  }
}


  
  // verify credentials for login
 /* logInUser(username, password){
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
   
  });*/

  
  
  

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

