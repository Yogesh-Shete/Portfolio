import { Component, OnInit } from '@angular/core';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  events: Array<{ title: string; description: string; date: string }> = [];

  ngOnInit(): void {
    // Initialize events with sample data
    this.events = [
      {
        title: 'High School Graduation',
        description: 'Completed high school with honors.',
        date: '2018-05-20'
      },
      {
        title: 'Bachelor\'s Degree in Computer Science',
        description: 'Graduated with a Bachelor\'s degree from XYZ University.',
        date: '2023-06-15'
      },
      {
        title: 'Started First Job',
        description: 'Joined ABC Corp as a software engineer.',
        date: '2023-08-01'
      }
    ];
  }
}
