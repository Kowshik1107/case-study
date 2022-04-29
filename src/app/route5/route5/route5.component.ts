import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css'],
})
export class Route5Component implements OnInit {
  Name: string = 'Name';
  Class: string = 'Class';
  Section: string = 'Section';
  Maths: string = 'Maths';
  Science: string = 'Science';
  Social: string = 'Social';
  marks = [] as Marks[];
  mark = {} as Marks;
  public columns: any;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getMarks();
  }

  getMarks() {
    this.http.getData('marks').subscribe((data: any) => {
      this.marks = data as Marks[];
      this.columns = Object.keys(data[2]);
      console.log(this.columns);
    });
  }

  getSortedData(e: any) {
    this.marks = e;
  }
}
export interface Marks {
  Name: string;
  Class: number;
  Section: string;
  Maths: number;
  Science: number;
  Social: number;
}
