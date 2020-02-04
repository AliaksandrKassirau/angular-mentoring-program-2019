import { ICourse } from 'src/modules/shared/courses-shared/icourse';
import { Component, EventEmitter, Input, Output, SimpleChanges,
  OnChanges, OnInit,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy,
  ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, OnChanges,
 AfterContentInit, AfterContentChecked,
 AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { }

  @Input()
  public course: ICourse;

  @Output()
  public deleted = new EventEmitter<ICourse>();

  @Output()
  public edited = new EventEmitter<ICourse>();

  public edit(): void {
    this.edited.emit(this.course);
  }

  public delete(): void {
    this.deleted.emit(this.course);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public ngOnInit(): void {
  }
}
