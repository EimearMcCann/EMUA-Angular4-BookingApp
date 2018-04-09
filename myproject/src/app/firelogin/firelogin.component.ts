import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-firelogin',
  templateUrl: './firelogin.component.html',
  styleUrls: ['./firelogin.component.css']
})
export class FireloginComponent implements OnInit {
  user = {
    email: '',
    password: ''
 };

  constructor(private authService: AuthService, private router: Router) { }

  
  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => {
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
         .then((res) => {
            this.router.navigate(['dashboard'])
         })
         .catch((err) => console.log(err));
    }
    signInWithEmail() {

      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          console.log(res);
          this.router.navigate(['dashboard']);
        })
        .catch((err) => console.log('error: ' + err));
    }





ngOnInit() {
}

}