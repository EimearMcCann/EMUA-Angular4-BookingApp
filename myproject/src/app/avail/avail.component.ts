import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-avail',
  templateUrl: './avail.component.html',
  styleUrls: ['./avail.component.css']
})
export class AvailComponent
{
  public apps : Array<any> =[];
  constructor(public http : HttpClient) {
    this.load();

  }

  ionViewWillEnter() : void{
    this.load();
  }
  load() : void{
    this.http

    .get('http://localhost/retrieve-availAWS.php')
    .subscribe((data : any) =>
  {
    console.dir(data);
    this.apps = data;
  },
  (error : any) =>{
    console.dir(error);
  });
  }
}
  