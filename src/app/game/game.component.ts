import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() intervalFired =new EventEmitter<number>();
  interval: any;
  lastNumber=0;
  constructor(){

  }
  ngOnInit(){
    
  }
  onStart(){
    this.interval=setInterval(()=>{
      this.intervalFired.emit(this.lastNumber +1);
      this.lastNumber++;

    },1000);

  }
  onPause(){
    clearInterval(this.interval);

  }

}
