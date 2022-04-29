import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logList: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}

  addLogs(log: any) {
    this.logList.push(log);
  }

  reset() {
    this.logList = [];
  }
}
