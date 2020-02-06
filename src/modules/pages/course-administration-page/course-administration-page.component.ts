import { ICourse } from 'src/modules/shared/courses-shared/icourse';
import { CoursesService } from 'src/modules/shared/courses-shared/courses.service';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/modules/shared/courses-shared/course';

@Component({
  selector: 'app-course-administration-page',
  templateUrl: './course-administration-page.component.html',
  styleUrls: ['./course-administration-page.component.less']
})
export class CourseAdministrationPageComponent implements OnInit {

  public course: ICourse;
  public authors: string[] = [];
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private readonly courseService: CoursesService) {
  }

  public ngOnInit(): void {
    console.log(this.route);
    if (this.route.snapshot.paramMap.has('id')) {
      const id = this.route.snapshot.paramMap.get('id') as unknown as number;
      this.course = this.courseService.getCourseById(id);
      console.log('Course was loaded', this.course);
    } else {
      this.course = new Course(null, null, null, null, null, null);
    }
  }

  public onCourseSaved(): void {
    if (this.course.id === null) {
      this.courseService.createCourse(this.course);
    } else {
      this.courseService.updateCourse(this.course);
    }
    this.router.navigate(['courses']);
  }

  public onEditingCanceled(): void {
    this.router.navigate(['courses']);
  }

  public addAuthor(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.authors.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public removeAuthor(author: string): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

}
