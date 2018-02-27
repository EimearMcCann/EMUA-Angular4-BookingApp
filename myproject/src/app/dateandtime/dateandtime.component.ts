import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dateandtime',
  templateUrl: './dateandtime.component.html',
  styleUrls: ['./dateandtime.component.css']
})
export class DateandtimeComponent{

  rForm: FormGroup;
  post: any;                //a property for thr submitted form
  description:string='';
  name:string='';

constructor(private fb: FormBuilder){
  
  
  this.rForm = fb.group({
    'name': [null, Validators.required],
    'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    'validate' : ''
  });
}
addPost(post) {
  this.description= post.description;
  this.name = post.name;
}
}
