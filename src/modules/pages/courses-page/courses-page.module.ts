import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpamSharedComponentsModule } from './../../components/epam-shared-components/epam-shared-components.module';
import { CoursesPageComponent } from './courses-page.component';
import { CourseComponent } from './course/course.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { DetectCourseTypeDirective } from './detect-course-type.directive';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    CoursesContainerComponent,
    DurationPipe,
    OrderByPipe,
    SearchPipe,
    DetectCourseTypeDirective
  ],
  imports: [
    CommonModule,
    EpamSharedComponentsModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
