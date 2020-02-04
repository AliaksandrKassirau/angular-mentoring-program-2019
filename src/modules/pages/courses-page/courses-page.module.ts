import { CoursesSharedModule } from 'src/modules/shared/courses-shared/courses-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpamSharedComponentsModule } from 'src/modules/components/epam-shared-components/epam-shared-components.module';
import { CoursesPageComponent } from './courses-page.component';
import { CourseComponent } from './course/course.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { DetectCourseTypeDirective } from './detect-course-type.directive';
import { DeleteConfirmationDialogComponent } from './courses-container/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    CoursesContainerComponent,
    OrderByPipe,
    SearchPipe,
    DetectCourseTypeDirective,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    EpamSharedComponentsModule,
    CoursesSharedModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    CoursesPageComponent
  ],
  entryComponents: [
    DeleteConfirmationDialogComponent
  ]
})
export class CoursesPageModule { }
