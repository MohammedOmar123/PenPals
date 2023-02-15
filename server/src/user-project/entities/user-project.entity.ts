import {
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { User } from 'src/users/entities';
import { Project } from '../../projects/entities';

@Table
export class UserProject extends Model<UserProject> {
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Project)
  @Column
  projectId: number;

  @BelongsTo(() => Project)
  project: Project;
}
