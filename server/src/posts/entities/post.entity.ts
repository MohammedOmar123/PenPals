import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';

import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';

@Table
export class Post extends Model<Post> {
  @PrimaryKey
  @Column
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
}
