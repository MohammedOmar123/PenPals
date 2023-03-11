import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Default,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

@Table
export class Notification extends Model<Notification> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column
  type: string;

  @Default(false)
  @Column
  seen: boolean;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Post)
  postId: number;

  @BelongsTo(() => Post)
  post: User;
}
