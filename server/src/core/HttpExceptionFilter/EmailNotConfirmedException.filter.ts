import { HttpException } from '@nestjs/common';

export class EmailNotConfirmedException extends HttpException {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
