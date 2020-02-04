import { Course } from '../../shared/courses-shared/course';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort courses by date in ascending order', () => {
    const pipe = new OrderByPipe();

    const incomingCourses = [
      new Course(1, 'test', new Date(2020, 1, 15), 30, '', true),
      new Course(2, 'test', new Date(2019, 8, 3), 30, '', true),
      new Course(3, 'test', new Date(2021, 2, 8), 30, '', true),
    ];

    const sortedCourses = pipe.transform(incomingCourses, 'creationDate', 0);
    expect(sortedCourses.map((course) => course.id)).toEqual([2, 1, 3]);
  });

  it('should sort courses by date in descending order configured by default', () => {
    const pipe = new OrderByPipe();

    const incomingCourses = [
      new Course(1, 'test', new Date(2020, 1, 15), 30, '', true),
      new Course(2, 'test', new Date(2019, 8, 3), 30, '', true),
      new Course(3, 'test', new Date(2021, 2, 8), 30, '', true),
    ];

    const sortedCourses = pipe.transform(incomingCourses, 'creationDate');
    expect(sortedCourses.map((course) => course.id)).toEqual([3, 1, 2]);
  });

  it('should sort courses by id in ascending order', () => {
    const pipe = new OrderByPipe();

    const incomingCourses = [
      new Course(1, 'test', new Date(2020, 1, 15), 30, '', true),
      new Course(2, 'test', new Date(2019, 8, 3), 30, '', true),
      new Course(3, 'test', new Date(2021, 2, 8), 30, '', true),
    ];

    const sortedCourses = pipe.transform(incomingCourses, 'id', 0);
    expect(sortedCourses.map((course) => course.id)).toEqual([1, 2, 3]);
  });


});
