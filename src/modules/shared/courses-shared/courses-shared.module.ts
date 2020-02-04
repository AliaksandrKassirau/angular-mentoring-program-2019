import { DurationPipe } from './duration.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe
  ]
})
export class CoursesSharedModule { }
