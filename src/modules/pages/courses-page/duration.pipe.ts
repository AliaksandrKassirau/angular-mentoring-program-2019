import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const durationInMinutes: number = value as number;
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours > 0 ? `${hours} h` : ''} ${minutes} m`;
  }
}
