import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-course-administration-page',
  templateUrl: './course-administration-page.component.html',
  styleUrls: ['./course-administration-page.component.less']
})
export class CourseAdministrationPageComponent implements OnInit {

  public courseId: number;
  public title: string;
  public description: string;
  public durationInMinutes: number;
  public courseDate: Date;
  public authors: string[] = [];
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() {
  }

  public ngOnInit(): void {
    this.durationInMinutes = 60;
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.authors.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public remove(author: string): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

}
