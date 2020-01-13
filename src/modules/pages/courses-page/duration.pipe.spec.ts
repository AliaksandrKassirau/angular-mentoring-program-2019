import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('handles minutes only', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(30)).toBe('30 m');
  });

  it('handles 1 hour without minites shown', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(60)).toBe('1 h');
  });

  it('handles hours and minutes', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(65)).toBe('1 h 5 m');
  });

  it('handles 0 as empty', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(0)).toBe('');
  });
});
