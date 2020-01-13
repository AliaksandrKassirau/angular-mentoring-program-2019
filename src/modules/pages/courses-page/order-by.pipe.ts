import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  private comparators = {
    0: (prev, next) => {
      return prev - next;
    },
    1: (prev, next) => {
      return next - prev;
    }
  };

  public transform<T>(items: T[], column: string, direction = Direction.DESC): T[] {
    return items.sort((prev, next) => {
      return this.comparators[direction](prev[column], next[column]);
    });
  }
}

enum Direction {
  ASC,
  DESC
}


