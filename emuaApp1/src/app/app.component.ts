//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMUA';
  public items : Array<any> =[];
  constructor(public http : HttpClient) {

   
  }
ionViewWillEnter() : void{
  this.load();
}

  /**
   * retrieve JSON encoded data from remote server
   * using http class and an observable
   * 
   */
load() : void{
  this.http
  .get('http://slimapp/api/customer/{idClient}')
  
  .subscribe((data : any) =>
{
  console.dir(data);
  this.items = data;
},
(error : any) =>{
  console.dir(error);
});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceListComponent');
  }

 
  }