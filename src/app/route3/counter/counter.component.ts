import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}
  pauseCounter: number = 0;
  startCounter: number = 0;

  ngOnInit(): void {}

  pauseCount() {
    this.pauseCounter++;
  }

  startCount() {
    this.startCounter++;
  }

  reset() {
    this.startCounter = 0;
    this.pauseCounter = 0;
  }
}
