import { ICourse } from './icourse';
export class Course implements ICourse {

  constructor(public id: number,
              public title: string,
              public creationDate: Date,
              public durationInMinutes: number,
              public description: string) {
  }
}
