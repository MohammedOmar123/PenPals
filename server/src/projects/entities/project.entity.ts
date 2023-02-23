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
  @Column({ autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  year: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  images: string[];
}
