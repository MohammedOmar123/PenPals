import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Post } from '../../posts/entities';
import { User } from '../../Users/entities';

@Table
export class Notification extends Model<User> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column
  type: string;

  @Column
  seen: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Post)
  @Column
  postId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Post)
  post: Post;
}
