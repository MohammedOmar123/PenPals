import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

import { User } from 'src/users/entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';

@Table
export class Comment extends Model<Comment> {
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

  @ForeignKey(() => Post)
  @Column
  postId: number;

  @BelongsTo(() => Post)
  post: Post;
}
