import {
  Column,
  Model,
  PrimaryKey,
  Table,
  DataType,
} from 'sequelize-typescript';

@Table
export class Project extends Model<Project> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  year: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  images: string[];
}
