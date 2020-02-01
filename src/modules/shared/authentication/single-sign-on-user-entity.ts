import { IUserEntity } from './user-entity';

export class SingleSignOnUserEntity implements IUserEntity {
  constructor(public id: number,
              public firstname: string,
              public lastname: string) {}
}
