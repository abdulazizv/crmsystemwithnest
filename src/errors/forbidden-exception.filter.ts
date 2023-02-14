import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbidenException extends HttpException {
  constructor(error: Error) {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
      {
        cause: error,
      },
    );
  }
}
