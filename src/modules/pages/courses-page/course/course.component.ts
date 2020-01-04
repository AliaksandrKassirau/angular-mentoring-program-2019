import { ICourse } from './../icourse';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  @Input()
  public course: ICourse;

  constructor() { }

  public ngOnInit() {
  }
}
