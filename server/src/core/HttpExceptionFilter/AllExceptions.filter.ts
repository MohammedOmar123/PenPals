import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

import { INTERNAL_SERVER_ERROR_MESSAGE } from '../constant';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json(exception.getResponse());
    } else {
      console.log(exception);
      response.json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: INTERNAL_SERVER_ERROR_MESSAGE,
        name: 'Internal server error',
      });
    }
  }
}
