import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseToSnakeInterceptor } from './response-to-snake';

@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ResponseToSnakeInterceptor },
  ],
})
export class InterceptorsModule {}
