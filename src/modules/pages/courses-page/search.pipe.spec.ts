import { SearchPipe } from './search.pipe';
import { Course } from './course';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter courses not containing text ', () => {
    const pipe = new SearchPipe();

    const incomingCourses = [
      new Course(1, 'Test title', new Date(2020, 1, 15), 30, '', true),
      new Course(2, 'Test TItle', new Date(2019, 8, 3), 30, '', true),
      new Course(3, 'All you need is a TEST title with example', new Date(2021, 2, 8), 30, '', true),
      new Course(4, 'Test t1tle', new Date(2021, 2, 8), 30, '', true),
      new Course(3, 'No way', new Date(2021, 2, 8), 30, '', true)
    ];

    const filteredCourses = pipe.transform(incomingCourses, 'Test title');
    expect(filteredCourses.map((course) => course.id)).toEqual([1, 2, 3]);
  });
});
