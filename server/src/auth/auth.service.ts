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
import {
  JWT_KEY,
  CHECK_EMAIL,
  INVALID_EMAIL,
  INVALID_CREDENTIALS,
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

      const secretKey = this.configService.get(JWT_KEY);
      const verifyToken = await this.jwtService.signAsync(email, {
        secret: secretKey,
      });

      await this.userRepository.create({
        ...dto,
        password: hashed,
        role: 'user',
        verifyToken,
      });

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
      where: { email, isConfirmed: true },
    });

    if (!user) throw new ForbiddenException(INVALID_CREDENTIALS);

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) throw new ForbiddenException(INVALID_CREDENTIALS);

    const secret = this.configService.get(JWT_KEY);
    const accessToken = await this.jwtService.signAsync(
      {
        id: user.id,
        email: user.id,
        role: user.role,
      },
      {
        expiresIn: '10d',
        secret,
      },
    );
    return { accessToken };
  }
}
