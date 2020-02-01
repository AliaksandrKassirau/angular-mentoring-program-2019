import { ICourse } from './icourse';
import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private static defaultDescription = `Learn about where you can
  find course descriptions, what information they include,
  how they work, and details about various components
  of a course description. Course descriptions report
  information about a university or college\'s classes.
  They\'re published both in course catalogs that outline
  degree requirements and in course schedules that contain descriptions
  for all courses offered during a particular semester.`;

  private sequence: number;
  private courses: ICourse[];

  constructor() {
    this.sequence = 0;
    this.courses = [
      this.generateCourse(),
      this.generateCourse(),
      this.generateCourse()
    ];
  }

  public createCourse(course: ICourse): ICourse {
    const randomlyGeneratedCourse = this.generateCourse();
    this.courses = [...this.courses, randomlyGeneratedCourse];
    console.log('Added course: ', randomlyGeneratedCourse);
    return course;
  }

  public getList(): ICourse[] {
    return this.courses;
  }

  public getCourseById(id: number): ICourse {
    return this.courses.find((course: ICourse) => course.id === id);
  }

  public updateCourse(updatedCourse: ICourse): void {
    this.courses = this.courses.map((course: Course) =>
        course.id === updatedCourse.id ? updatedCourse : course);
    console.log('Edited course: ', updatedCourse);
  }

  public deleteCourse(deletedCourse: ICourse) {
    this.courses = this.courses.filter((course: Course) => course.id !== deletedCourse.id);
    console.log('Deleted course: ', deletedCourse);
  }

  private generateCourse(): ICourse {
    return new Course(++this.sequence,
      `Video Course ${this.sequence}. Name tag`,
      this.randomDate(new Date(2020, 0, 1), new Date(2020, 1, 1)), 15,
      CoursesService.defaultDescription, Math.random() >= 0.5);
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
