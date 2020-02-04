import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ICourse } from 'src/modules/shared/courses-shared/icourse';

@Directive({
  selector: '[appDetectCourseType]'
})
export class DetectCourseTypeDirective implements OnInit {

  @Input('appDetectCourseType') public course: ICourse;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  public ngOnInit(): void {
    const creationDate = this.course.creationDate;
    this.handleFreshCourse();
    this.handleUpcomingCourse();
  }

  private handleFreshCourse(): void {
    const creationDate = this.course.creationDate;
    const dateNow = new Date();
    const freshCourseDate = new Date();
    freshCourseDate.setDate(dateNow.getDate() - 14);

    if (creationDate < dateNow && creationDate >= freshCourseDate) {
      this.setBorder('green');
    }
  }

  private handleUpcomingCourse(): void {
    if (this.course.creationDate > new Date()) {
      this.setBorder('blue');
    }
  }

  private setBorder(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', `2px solid ${color}`);
  }
}
