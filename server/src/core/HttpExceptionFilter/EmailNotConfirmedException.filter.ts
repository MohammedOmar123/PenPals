import { HttpException } from '@nestjs/common';
import { EMAIL_IS_NOT_CONFIRMED } from '../constant';
export class EmailNotConfirmedException extends HttpException {
  constructor() {
    super(
      {
        statusCode: 422,
        message: EMAIL_IS_NOT_CONFIRMED,
        error: 'Not Confirmed Email',
      },
      422,
    );
  }
}
