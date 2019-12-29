import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpamSharedComponentsModule } from './../../components/epam-shared-components/epam-shared-components.module';
import { CoursesPageComponent } from './courses-page.component';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    CommonModule,
    EpamSharedComponentsModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
