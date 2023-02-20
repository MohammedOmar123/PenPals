import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

import { INTERNAL_SERVER_ERROR } from '../constant';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const error = {
      status: 0,
      message: '',
      name: '',
    };
    if (exception instanceof HttpException) {
      error.status = exception.getStatus();
      error.message = exception.message;
      error.name = exception.name;
    } else {
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      error.message = INTERNAL_SERVER_ERROR;
      error.name = 'Internal server error';
      console.log(exception);
    }
    response.status(error.status).json(error);
  }
}
