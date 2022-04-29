import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route5-routing.module';
import { Route5Component } from './route5/route5.component';
import { SortDirective } from '../Directives/sort.directive';


@NgModule({
  declarations: [
    Route5Component,
    SortDirective,
  ],
  imports: [
    CommonModule,
    Route5RoutingModule,
  ]
})
export class Route5Module { }
