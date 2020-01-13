import { ICourse } from './icourse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(courses: ICourse[], searchText: string): ICourse[] {
    if (searchText.trim() === '') {
      return courses;
    }
    return courses.filter( course => course.title.toLowerCase().includes(searchText.toLowerCase()));
  }
}
