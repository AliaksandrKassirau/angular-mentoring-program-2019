import { DurationPipe } from './../duration.pipe';
import { ICourse } from './../icourse';
import { Course } from './../course';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { By } from '@angular/platform-browser';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, DurationPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const componentCourse: ICourse =  new Course(1, 'testTitle', new Date('2020-01-01'), 30, 'testDescription');
    component.course = componentCourse;

    const durationPipeSpy = spyOn(DurationPipe.prototype, 'transform');

    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.course-name')).nativeElement.innerText).toBe(componentCourse.title);
    expect(fixture.debugElement.query(By.css('.description-text')).nativeElement.innerText).toBe(componentCourse.description);

    expect(durationPipeSpy).toHaveBeenCalled();
    expect(fixture.debugElement.query(By.css('.course-info')).nativeElement.innerText).toBe('Jan 1, 2020');
  });

  it('should call edit function triggering an event of the component being edited', () => {
    const componentCourse: ICourse =  new Course(1, 'testTitle', new Date('2020-01-01'), 30, 'testDescription');
    component.course = componentCourse;
    fixture.detectChanges();

    let actualEditedCourse: ICourse;
    component.edited.subscribe( (courseEdited: ICourse) => {
      actualEditedCourse = courseEdited;
    });

    fixture.debugElement.query(By.css('.edit-button')).triggerEventHandler('click', null);

    expect(actualEditedCourse).toEqual(componentCourse);
  });

  it('should call edit function triggering an event of the component being deleted', () => {
    const componentCourse: ICourse =  new Course(1, 'testTitle', new Date('2020-01-01'), 30, 'testDescription');
    component.course = componentCourse;
    fixture.detectChanges();

    let actualDeletedCourse: ICourse;
    component.deleted.subscribe( (courseDeleted: ICourse) => {
      actualDeletedCourse = courseDeleted;
    });

    fixture.debugElement.query(By.css('.delete-button')).triggerEventHandler('click', null);

    expect(actualDeletedCourse).toEqual(componentCourse);
  });
});
