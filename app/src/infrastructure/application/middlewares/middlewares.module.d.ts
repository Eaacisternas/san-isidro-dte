import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class MiddlewaresModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
