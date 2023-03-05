import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
  IsArray,
  IsString,
  IsOptional
} from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images: string[];
}
