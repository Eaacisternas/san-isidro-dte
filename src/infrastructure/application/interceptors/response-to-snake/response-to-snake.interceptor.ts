import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { isObject } from 'class-validator';
import { map } from 'rxjs';
import { objectToSnake } from 'ts-case-convert';

@Injectable()
export class ResponseToSnakeInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler<unknown>) {
    return next
      .handle()
      .pipe(map((value) => (isObject(value) ? objectToSnake(value) : value)));
  }
}
