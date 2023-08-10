import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class ResponseToSnakeInterceptor implements NestInterceptor {
    intercept(_: ExecutionContext, next: CallHandler<unknown>): import("rxjs").Observable<unknown>;
}
