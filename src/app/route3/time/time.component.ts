import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  constructor() {}
  @Input() time: string = '';
  intervalID: any;
  generater2: any;

  ngOnInit(): void {}

  counterStart() {
    this.intervalID = setInterval(() => {
      this.time = (parseInt(this.time) - 1).toString();
      if (parseInt(this.time) < 0) {
        this.time = '0';
      }
    }, 1000);
  }
  pause() {
    clearInterval(this.intervalID);
  }
  restart() {
    this.intervalID = setInterval(() => {
      this.time = (parseInt(this.time) - 1).toString();
      if (parseInt(this.time) <= 0) {
        this.time = '';
      }
    }, 1000);
  }

  reset() {
    clearInterval(this.intervalID);
    this.time = '';
  }
}
