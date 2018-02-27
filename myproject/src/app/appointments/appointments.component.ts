import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {


  public items : Array<any> =[];
  constructor(public http : HttpClient) {
    this.load();

  }

  ionViewWillEnter() : void{
    this.load();
  }
  load() : void{
    this.http

    .get('http://localhost/retrieve-AppointmentAWS.php')
    .subscribe((data : any) =>
  {
    console.dir(data);
    this.items = data;
  },
  (error : any) =>{
    console.dir(error);
  });
  }
}
  



