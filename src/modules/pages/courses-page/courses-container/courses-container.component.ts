import { Course } from './../course';
import { ICourse } from './../icourse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.less']
})
export class CoursesContainerComponent implements OnInit {

  public courses: ICourse[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      new Course(1, "Video Course 1. Name tag", new Date(), 15, "Lorem ipsum"),
      new Course(2, "Video Course 2. Name tag", new Date(), 15, "Lorem ipsum")
    ];
  }

}
