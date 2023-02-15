import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

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
}
