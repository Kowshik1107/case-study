import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { LogsComponent } from '../logs/logs.component';
import { TimeComponent } from '../time/time.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css'],
})
export class Route3Component implements OnInit {
  time: string = '';
  @ViewChild('displayChild') displayChild!: TimeComponent;
  @ViewChild('logChild') logChild!: LogsComponent;
  @ViewChild('trackChild') trackChild!: CounterComponent;

  constructor() {}

  ngOnInit(): void {}

  getTime(e: any) {
    this.displayChild.pause();
    this.displayChild.reset();
    this.logChild.reset();
    this.trackChild.reset();
    this.time = e;
  }

  startTimer(action: string) {
    console.log(action);
    if (action == 'RESTART') {
      this.displayChild.restart();
      this.trackChild.startCount();
    } else if (action == 'PAUSE') {
      this.displayChild.pause();
      this.trackChild.pauseCount();
    } else {
      this.displayChild.counterStart();
      this.trackChild.startCount();
    }
    this.logChild.addLogs(action + 'ED: at ' + new Date());
  }

  resetAll() {
    this.displayChild.reset();
    this.logChild.reset();
    this.trackChild.reset();
  }
}
