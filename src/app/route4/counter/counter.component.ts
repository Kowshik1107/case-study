import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  public started: any = 0;
  public paused: any = 0;
  constructor(private counterService: TimerService) {}

  ngOnInit(): void {
    this.clicksOperation();
  }

  public clicksOperation() {
    this.counterService.clicksOperation.subscribe({
      next: (res) => {
        console.log(res);
        if (res === 'reset') {
          this.started = null;
          this.paused = null;
        } else if (res == 'start') {
          this.started = this.started + 1;
        } else {
          this.paused = this.paused + 1;
        }
      },
      error: (error) => console.log(error),
      complete: () => {},
    });
  }
}
