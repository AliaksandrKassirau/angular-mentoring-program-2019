import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';
import { CourseComponent } from './course/course.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { EpamSharedComponentsModule } from 'src/modules/components/epam-shared-components/epam-shared-components.module';
import { DetectCourseTypeDirective } from './detect-course-type.directive';
import { DurationPipe } from 'src/modules/shared/courses-shared/duration.pipe';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        EpamSharedComponentsModule,
        RouterTestingModule.withRoutes(routes),
        MatDialogModule
      ],
      declarations: [
        CoursesPageComponent,
        CoursesContainerComponent,
        CourseComponent,
        DurationPipe,
        OrderByPipe,
        SearchPipe,
        DetectCourseTypeDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
