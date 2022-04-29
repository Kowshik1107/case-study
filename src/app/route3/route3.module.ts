import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3/route3.component';
import { TimerComponent } from './timer/timer.component';
import { TimeComponent } from './time/time.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  declarations: [
    Route3Component,
    TimerComponent,
    TimeComponent,
    CounterComponent,
    LogsComponent,
  ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class Route3Module {}
