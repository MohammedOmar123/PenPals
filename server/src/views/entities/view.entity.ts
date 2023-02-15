import {
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';

import { Post } from 'src/posts/entities';
import { User } from 'src/users/entities';

@Table
export class View extends Model<View> {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @PrimaryKey
  @ForeignKey(() => Post)
  @Column
  postId: number;

  @BelongsTo(() => User)
  post: User;
}
