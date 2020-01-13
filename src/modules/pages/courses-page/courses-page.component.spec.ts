import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';
import { DurationPipe } from './duration.pipe';
import { CourseComponent } from './course/course.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { EpamSharedComponentsModule } from 'src/modules/components/epam-shared-components/epam-shared-components.module';
import { DetectCourseTypeDirective } from './detect-course-type.directive';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EpamSharedComponentsModule],
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
