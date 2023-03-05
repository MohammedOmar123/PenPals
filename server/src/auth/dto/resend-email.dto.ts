import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class ResendEmailDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
