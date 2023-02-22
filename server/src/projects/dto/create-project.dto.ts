import { IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @MaxLength(150)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;
}
