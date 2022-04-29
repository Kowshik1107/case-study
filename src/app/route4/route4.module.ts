import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4/route4.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { TimeComponent } from './time/time.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Route4Component,
    CounterComponent,
    TimerComponent,
    TimeComponent,
  ],
  imports: [CommonModule, Route4RoutingModule, FormsModule],
})
export class Route4Module {}
