import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

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
    
    if (username =='admin' && password =='admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
    else{
      this.toastr.error("Wrong Username or Password");
    }



  }

}
