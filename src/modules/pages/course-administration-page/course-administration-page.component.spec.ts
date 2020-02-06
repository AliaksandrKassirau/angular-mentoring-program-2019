import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoursesSharedModule } from 'src/modules/shared/courses-shared/courses-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdministrationPageComponent } from './course-administration-page.component';
import { MatChipsModule } from '@angular/material/chips';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

describe('CourseAdministrationPageComponent', () => {
  let component: CourseAdministrationPageComponent;
  let fixture: ComponentFixture<CourseAdministrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAdministrationPageComponent ],
      imports: [
          FormsModule,
          ReactiveFormsModule,
          CoursesSharedModule,
          MatChipsModule,
          MatFormFieldModule,
          MatIconModule,
          RouterTestingModule.withRoutes(routes),
          NoopAnimationsModule
      ]
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
