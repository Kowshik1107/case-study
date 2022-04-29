import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  public countDown: any;
  public interval: any;
  constructor(private countDownService: TimerService) {}

  ngOnInit(): void {
    this.getTimerStream();
  }

  public getTimerStream() {
    this.countDownService.subject.subscribe({
      next: (value: any) => {
        console.log(value);
        if (value.reset === 'reset') {
          this.countDown = '';
          this.countDownService.countDown = 0;
          clearInterval(this.interval);
        } else if (value.mode) {
          this.countDown = value.timerLimit;
          this.calculateCountdown();
        } else {
          clearInterval(this.interval);
        }
      },
      error: (error) => console.log(error),
      complete: () => {},
    });
  }

  public calculateCountdown() {
    this.interval = setInterval(() => {
      if (this.countDown) {
        this.countDown = this.countDown - 1;
        this.countDownService.countDown = this.countDown;
      }
    }, 1000);
  }
}
