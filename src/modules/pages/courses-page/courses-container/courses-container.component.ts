import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { CoursesService } from 'src/modules/shared/courses-shared/courses.service';
import { ICourse } from 'src/modules/shared/courses-shared/icourse';
import { Component, OnInit, OnChanges,
  SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.less']
})
export class CoursesContainerComponent implements OnInit, OnChanges {
  public searchInputValue = '';
  public courses: ICourse[];

  constructor(private readonly coursesService: CoursesService,
              private router: Router,
              public dialog: MatDialog) { }

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.courses = this.coursesService.getList();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  public onCourseAdded(): void {
    this.router.navigate(['courses', 'add']);
  }

  public onCourseEdited(editedCourse: ICourse): void {
    this.router.navigate(['courses', editedCourse.id]);
  }

  public onCourseDeleted(deletedCourse: ICourse): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px'
    });
    dialogRef.componentInstance.onYes.subscribe(() => {
      this.coursesService.deleteCourse(deletedCourse);
      this.courses = this.coursesService.getList();
    });
  }

  public onCoursesSearched(searchInputValue: string): void {
    this.searchInputValue = searchInputValue;
  }
}
