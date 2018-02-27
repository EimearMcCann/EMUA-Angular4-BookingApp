import { Component} from '@angular/core';
import { UserService } from '../user.service';
import {HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-userservices',
  templateUrl: './userservices.component.html',
  styleUrls: ['./userservices.component.css']
})
export class UserservicesComponent {
  public items : Array<any>=[];
  selectedService: String = '';



  constructor(private httpClient:HttpClient){
    this.load();
  }
  
ionViewWillEnter() : void{
  this.load
}

  load():void{
    this.httpClient.get('http://localhost/retrieveServicesAWS.php')
    .subscribe(
      (data:any[])=>{
        console.log(data);
        this.items= data;
      },
      (error:any) =>{
        console.dir(error);
      });

  }
 }