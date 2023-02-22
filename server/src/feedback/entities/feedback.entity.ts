import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

import { User } from '../../users/entities';

@Table
export class Feedback extends Model<Feedback> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column
  content: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
