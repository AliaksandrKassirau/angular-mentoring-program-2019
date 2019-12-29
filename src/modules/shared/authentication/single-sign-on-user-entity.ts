import { IUserEntity } from './user-entity';

export class SingleSignOnUserEntity implements IUserEntity {
  id: number;
  firstname: string;
  lastname: string;
}
