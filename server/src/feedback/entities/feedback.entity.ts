import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

import { User } from 'src/users/entities/user.entity';

@Table
export class Feedback extends Model<Feedback> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  content: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
