import { Course } from './../course';
import { ICourse } from './../icourse';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.less']
})
export class CoursesContainerComponent implements OnInit, OnChanges {
  private static defaultDescription = `Learn about where you can
    find course descriptions, what information they include,
    how they work, and details about various components
    of a course description. Course descriptions report
    information about a university or college\'s classes.
    They\'re published both in course catalogs that outline
    degree requirements and in course schedules that contain descriptions
    for all courses offered during a particular semester.`;

  public searchInputValue = '';
  public courses: ICourse[];
  private sequence: number;

  constructor() { }

  public ngOnInit() {
    console.log('ngOnInit');
    this.sequence = 0;
    this.courses = [
      this.generateCourse(),
      this.generateCourse(),
      this.generateCourse()
    ];
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes);
  }

  public onCourseAdded(course: ICourse) {
    const addedCourse: ICourse = this.generateCourse();
    this.courses = [...this.courses, addedCourse];
    console.log('Added course: ', addedCourse);
  }

  // TODO: add interface for managing courses lifecycle
  public onCourseEdited(editedCourse: ICourse) {
    console.log('Edited course: ', editedCourse);
  }

  public onCourseDeleted(deletedCourse: ICourse) {
    this.courses = this.courses.filter((course: Course) => course.id !== deletedCourse.id);
    console.log('Deleted course: ', deletedCourse);
  }

  public onCoursesSearched(searchInputValue: string) {
    this.searchInputValue = searchInputValue;
  }

  private generateCourse(): ICourse {
    return new Course(++this.sequence,
      `Video Course ${this.sequence}. Name tag`,
      this.randomDate(new Date(2020, 0, 1), new Date(2020, 1, 1)), 15,
      CoursesContainerComponent.defaultDescription, Math.random() >= 0.5);
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
