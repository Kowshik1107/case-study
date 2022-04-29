import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.css'],
})
export class Route4Component implements OnInit {
  public timerLimit: any;
  public countDownTimeLogs: any = [];
  public mode: boolean = false;
  constructor(public counterService: TimerService) {}

  ngOnInit(): void {}

  startPauseTimer() {
    if (this.timerLimit && !this.counterService.countDown) {
      this.mode = true;
    } else if (this.timerLimit) {
      this.mode = !this.mode;
    }
    console.log(this.counterService.countDown);
    if (this.mode && this.counterService.countDown) {
      this.counterService.setTimerLimit({
        timerLimit: this.counterService.countDown,
        mode: true,
      });
      this.counterService.setTimerLogs(`Started at ${this.getFormattedDate()}`);
      this.counterService.setClicksOperation('start');
      this.countDownTimeLogs.push(
        `Started at ${this.counterService.countDown}`
      );
    } else if (this.mode && this.timerLimit) {
      this.counterService.setTimerLimit({
        timerLimit: this.timerLimit,
        mode: true,
      });
      this.counterService.setTimerLogs(`Started at ${this.getFormattedDate()}`);
      this.counterService.setClicksOperation('start');
      this.countDownTimeLogs.push(
        `Started at ${
          this.counterService.countDown
            ? this.counterService.countDown
            : this.timerLimit
        }`
      );
    } else if (this.timerLimit) {
      this.counterService.setTimerLimit({
        timerLimit: this.timerLimit,
        mode: false,
      });
      this.counterService.setTimerLogs(`Paused at ${this.getFormattedDate()}`);
      this.counterService.setClicksOperation('pause');
      this.countDownTimeLogs.push(
        `Paused at ${
          this.counterService.countDown
            ? this.counterService.countDown
            : this.timerLimit
        }`
      );
    }
  }

  resetTimer() {
    this.timerLimit = '';
    this.mode = false;
    this.countDownTimeLogs = [];
    this.counterService.setTimerLimit({
      timerLimit: null,
      mode: false,
      reset: 'reset',
    });
    this.counterService.setTimerLogs('reset');
    this.counterService.setClicksOperation('reset');
  }

  getFormattedDate() {
    let pipe = new DatePipe('en-US');
    const now = Date.now();
    const myFormattedDate = pipe.transform(now, 'medium');
    return myFormattedDate;
  }
}
