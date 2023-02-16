import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Feedback } from 'src/feedback/entities/feedback.entity';

import { Post } from 'src/posts/entities';

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
}
