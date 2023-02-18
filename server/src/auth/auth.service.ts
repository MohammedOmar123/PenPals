import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config/';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { SignupDto } from './dto/';
import { User } from '../users/entities';
import { JWT_KEY, CREATED_ACCOUNT, INVALID_EMAIL } from '../core/constant';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}
  async signup(dto: SignupDto) {
    const { email, password } = dto;

    const isEmailExist = await this.userRepository.findOne({
      where: { email },
    });

    if (isEmailExist) throw new BadRequestException(INVALID_EMAIL);

    const hashed = await bcrypt.hash(password, 10);

    const { role, id } = await this.userRepository.create(
      { ...dto, password: hashed, role: 'user' },
      {
        returning: ['id', 'role'],
      },
    );

    const accessToken = await this.generateToken(+id, email, role);
    // response
    return { accessToken, message: CREATED_ACCOUNT };
  }

  async sigIn() {
    console.log('signIn function');
  }

  // Helper function to create a token
  async generateToken(
    id: number,
    email: string,
    role: string,
  ): Promise<string> {
    const secretKey = this.configService.get(JWT_KEY);
    const accessToken = await this.jwtService.signAsync(
      {
        id,
        email,
        role,
      },
      {
        expiresIn: '10d',
        secret: secretKey,
      },
    );
    return accessToken;
  }
}