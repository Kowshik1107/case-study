import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  public subject = new Subject();
  public timerlogs = new Subject();
  public clicksOperation = new Subject();
  public countDown: number = 0;

  constructor() {}

  public setTimerLimit(value: any) {
    this.subject.next(value);
  }

  public setTimerLogs(value: string) {
    this.timerlogs.next(value);
  }

  public setClicksOperation(value: any) {
    this.clicksOperation.next(value);
  }
}
