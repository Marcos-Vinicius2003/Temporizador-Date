import { Component, OnInit, Input } from '@angular/core';
import * as countdown from 'countdown';

interface Time{
  hours:number,
  minutes:number,
  seconds:number
}


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  time: Time =null;
  timerId : number = null;

  @Input() date : Date | string;
  constructor() { }

  ngOnInit(){
    console.log(this.date);
    if(String(this.date)){
      this.date = new Date(this.date);
    }

    this.timerId = countdown(this.date,(ts)=>{
      this.time = ts;
    }, countdown.HOURS | countdown.MINUTES |countdown.SECONDS)
  }
  ngOnDestroy(){
    if(this.timerId){
      clearInterval(this.timerId);
    }
  }
}
