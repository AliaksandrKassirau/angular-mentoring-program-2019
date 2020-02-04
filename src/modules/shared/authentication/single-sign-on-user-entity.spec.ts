import { SingleSignOnUserEntity } from './single-sign-on-user-entity';

describe('SingleSignOnUserEntity', () => {
  it('should create an instance', () => {
    expect(new SingleSignOnUserEntity(1, 'test', 'test')).toBeTruthy();
  });
});
