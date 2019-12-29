import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpamSharedComponentsModule } from './../../components/epam-shared-components/epam-shared-components.module';
import { CoursesPageComponent } from './courses-page.component';
import { CourseComponent } from './course/course.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    CoursesContainerComponent,
    DurationPipe
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
