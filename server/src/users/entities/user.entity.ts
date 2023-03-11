import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Feedback } from '../../feedback/entities';
import { Post } from '../../posts/entities';
import { Comment } from '../../comments/entities';
import { Notification } from '../../notification/entities/notification.entity';
@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  image: string;

  @Column
  password: string;

  @Column
  role: string;

  @Column
  verifyToken: string;

  @Column
  isConfirmed: boolean;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Feedback)
  feedbacks: Feedback[];

  @HasMany(() => Notification)
  notifications: Notification[];
  @HasMany(() => Comment)
  comments: Comment[];
}
