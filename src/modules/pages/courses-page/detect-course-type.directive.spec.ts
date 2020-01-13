import { ICourse } from './icourse';
import { DetectCourseTypeDirective } from './detect-course-type.directive';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Course } from './course';

@Component({
  template: `<div [appDetectCourseType]="course"></div>`
})
class TestComponent {
  public course: ICourse;
}

describe('DetectCourseTypeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectCourseTypeDirective,  TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldn\'t add any borders', () => {
    const today = new Date();
    const freshCourseDate = new Date();
    freshCourseDate.setDate(today.getDate() - 80);

    const componentCourse: ICourse =  new Course(1, 'testTitle', freshCourseDate, 30, 'testDescription', false);
    component.course = componentCourse;
    fixture.detectChanges();
    const componentStyles = fixture.debugElement.query(By.css('div')).styles;
    expect(componentStyles).toEqual({});
  });


  it('should be handled as a fresh course', () => {
    const today = new Date();
    const freshCourseDate = new Date();
    freshCourseDate.setDate(today.getDate() - 13);

    const componentCourse: ICourse =  new Course(1, 'testTitle', freshCourseDate, 30, 'testDescription', false);
    component.course = componentCourse;
    fixture.detectChanges();
    const componentStyles = fixture.debugElement.query(By.css('div')).styles;
    expect(componentStyles).toEqual({border: '2px solid green'});
  });

  it('should be handled as a upcoming course', () => {
    const today = new Date();
    const upcomingEventDate = new Date();
    upcomingEventDate.setDate(today.getDate() + 1);

    const componentCourse: ICourse =  new Course(1, 'testTitle', upcomingEventDate, 30, 'testDescription', false);
    component.course = componentCourse;
    fixture.detectChanges();
    const componentStyles = fixture.debugElement.query(By.css('div')).styles;
    console.log(componentStyles);
    expect(componentStyles).toEqual({border: '2px solid blue'});
  });
});
