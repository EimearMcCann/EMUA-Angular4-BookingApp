import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }
  loginaUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username =='user' && password =='user'){
      this.user.setUserLoggedIn();
      this.router.navigate(['userservices']);
  }
}
}



