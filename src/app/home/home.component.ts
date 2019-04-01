import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dateNow:any;
  constructor(private datePipe: DatePipe) { }
     
  ngOnInit() {
    var date = new Date();
    this.dateNow= this.datePipe.transform(date,"dd-MM-yyyy");
    console.log("dateNow",this.dateNow);
    
  }
}