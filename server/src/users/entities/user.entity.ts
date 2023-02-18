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
@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  fullName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  role: string;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Feedback)
  feedbacks: Feedback[];

  @HasMany(() => Comment)
  comments: Comment[];
}
