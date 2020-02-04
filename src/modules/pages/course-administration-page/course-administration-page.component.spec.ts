import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdministrationPageComponent } from './course-administration-page.component';

describe('CourseAdministrationPageComponent', () => {
  let component: CourseAdministrationPageComponent;
  let fixture: ComponentFixture<CourseAdministrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAdministrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
