import { Component} from '@angular/core';
import { UserService } from '../user.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router/src/router';
import {Http, Response, Headers} from '@angular/http';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  public items : Array<any>=[];
  Client_Fname:string='';


  constructor(private httpClient:HttpClient){
    this.load();
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
 }

