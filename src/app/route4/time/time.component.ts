import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  timerLogs: any = [];
  constructor(private counterService: TimerService) {}

  ngOnInit(): void {
    this.getLogs();
  }

  public getLogs() {
    this.counterService.timerlogs.subscribe({
      next: (res) => {
        console.log(res);
        if (res === 'reset') {
          this.timerLogs = [];
        } else {
          this.timerLogs.push(res);
        }
      },
      error: (error) => console.log(error),
      complete: () => {
        console.log();
      },
    });
  }
}
