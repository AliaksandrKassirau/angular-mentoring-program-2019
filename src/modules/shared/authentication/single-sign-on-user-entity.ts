import { IUserEntity } from './user-entity';

export class SingleSignOnUserEntity implements IUserEntity {
  public id: number;
  public firstname: string;
  public lastname: string;
}
