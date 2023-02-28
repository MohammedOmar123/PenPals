import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';

import { User } from '../../users/entities';
import { Comment } from '../../comments/entities';
import { Notification } from '../../notifications/entities/notification.entity';

@Table
export class Post extends Model<Post> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column
  title: string;

  @Column
  content: string;

  @Column
  isApproved: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => Notification)
  notifications: Notification[];
}
