import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  Client_Fname:string='';


  constructor(private httpClient:HttpClient){}
  onNameKeyUp(event:any){
    this.Client_Fname = '';
   
  }
  getClient(){
    this.httpClient.get('http://slimapp/api/customer')
    .subscribe(
      (data:any[])=>{
        console.log(data);
       
          
        }
        
      
    )

  }
 }

