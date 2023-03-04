import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

import { JWT_KEY } from '../../core/constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          console.log(request.cookies);
          return request.cookies?.token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get(JWT_KEY),
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
