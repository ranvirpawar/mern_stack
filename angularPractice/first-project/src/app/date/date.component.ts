import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  // message: string = new Date().toDateString();
  dateMessage:string ;
  constructor(){
    this.dateMessage = ""
    setInterval(()=>{
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
    }, 1000)
    //let currentDate = new Date();
    //this.dateMessage = currentDate.toDateString() + " " + currentDate.toLocaleTimeString()
  }

  ngOnInit() {
       }
}
