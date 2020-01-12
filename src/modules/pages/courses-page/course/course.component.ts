import { ICourse } from './../icourse';
import { Component, EventEmitter, Input, Output, SimpleChanges,
  OnChanges, OnInit,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
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

  public edit() {
    this.edited.emit(this.course);
  }

  public delete() {
    this.deleted.emit(this.course);
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  public ngAfterContentInit() {
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

  public ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  public ngOnInit() {
  }
}
