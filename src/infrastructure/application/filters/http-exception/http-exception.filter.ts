import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { isObject } from 'class-validator';
import { Response } from 'express';
import { objectToSnake } from 'ts-case-convert';

@Catch(HttpException)
export class HttpExceptionFilter<TException extends HttpException>
  implements ExceptionFilter<TException>
{
  catch(exception: TException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    response.status(status).json(
      objectToSnake({
        statusCode: status,
        ...(isObject(exceptionResponse) ? exceptionResponse : {}),
      }),
    );
  }
}
