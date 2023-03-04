import {
  Injectable,
  BadRequestException,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config/';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { SignInDto, SignupDto } from './dto/';
import { User } from '../users/entities';
import { EmailServices } from './email.service';
import { EmailNotConfirmedException } from '../core/HttpExceptionFilter/';
import {
  JWT_KEY,
  CHECK_EMAIL,
  INVALID_EMAIL,
  INVALID_CREDENTIALS,
  EMAIL_IS_NOT_CONFIRMED,
} from '../core/constant';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private configService: ConfigService,
    private jwtService: JwtService,
    private emailServices: EmailServices,
  ) {}

  async signup(dto: SignupDto) {
    try {
      const { email, password } = dto;

      const isEmailExist = await this.userRepository.findOne({
        where: { email },
      });

      if (isEmailExist) throw new BadRequestException(INVALID_EMAIL);

      const hashed = await bcrypt.hash(password, 10);

      const user = await this.userRepository.create(
        {
          ...dto,
          password: hashed,
          role: 'user',
        },
        {
          returning: true,
        },
      );

      const verifyToken = await this.generateToken(
        user.id,
        user.email,
        user.role,
      );

      await this.userRepository.update(
        {
          verifyToken,
        },
        {
          where: { id: user.id },
        },
      );

      await this.emailServices.sendMail(email, verifyToken);

      return { message: CHECK_EMAIL };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else if (error.name === 'SequelizeUniqueConstraintError') {
        throw new BadRequestException(INVALID_EMAIL);
      } else {
        throw error;
      }
    }
  }

  async sigIn(dto: SignInDto) {
    const { email, password } = dto;

    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) throw new ForbiddenException(INVALID_CREDENTIALS);
    if (!user.isConfirmed)
      throw new EmailNotConfirmedException(EMAIL_IS_NOT_CONFIRMED, 422);

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) throw new ForbiddenException(INVALID_CREDENTIALS);

    const accessToken = await this.generateToken(
      user.id,
      user.email,
      user.role,
    );
    return accessToken;
  }

  async generateToken(id: number, email: string, role: string) {
    const secret = this.configService.get(JWT_KEY);
    const accessToken = await this.jwtService.signAsync(
      {
        id,
        email,
        role,
      },
      {
        expiresIn: '10d',
        secret,
      },
    );
    return accessToken;
  }
}
