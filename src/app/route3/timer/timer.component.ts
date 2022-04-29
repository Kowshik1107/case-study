import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  @Output() sendTime = new EventEmitter<any>();
  @Output() startTimer = new EventEmitter<any>();
  @Output() resetAll = new EventEmitter();
  time: string = '';
  preAction: string = '';

  constructor() {}

  ngOnInit(): void {}

  timeChange(): void {
    this.sendTime.emit(this.time);
    this.preAction = '';
    // this.startTimer.emit(this.preAction);
  }
  initiateTimer(): void {
    if (this.preAction == 'START' || this.preAction == 'RESTART') {
      this.preAction = 'PAUSE';
      this.startTimer.emit(this.preAction);
    } else if (this.preAction == 'PAUSE') {
      this.preAction = 'RESTART';
      this.startTimer.emit(this.preAction);
    } else {
      this.preAction = 'START';
      this.startTimer.emit(this.preAction);
    }
  }

  resetCounter(): void {
    this.resetAll.emit();
  }
}
