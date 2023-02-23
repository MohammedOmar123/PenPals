import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

import { User } from '../../users/entities';
import { Post } from '../../posts/entities';

@Table
export class Comment extends Model<Comment> {
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

  @ForeignKey(() => Post)
  @Column
  postId: number;

  @BelongsTo(() => Post)
  post: Post;
}
