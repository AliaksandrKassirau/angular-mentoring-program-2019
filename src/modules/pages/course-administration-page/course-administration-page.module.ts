import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAdministrationPageComponent } from './course-administration-page.component';
import { CoursesSharedModule } from 'src/modules/shared/courses-shared/courses-shared.module';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CourseAdministrationPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoursesSharedModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    CourseAdministrationPageComponent
  ]
})
export class CourseAdministrationPageModule { }
