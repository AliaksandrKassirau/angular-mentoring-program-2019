import { Pipe, PipeTransform } from '@angular/core';

// this pipe is used to covert minutes to text representation of hours and minutes.
@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(durationInMinutes: number): string {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours > 0 ? `${hours} h` : ''} ${minutes > 0 ? `${minutes} m` : ''}`.trim();
  }
}
