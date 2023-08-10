import { PACKAGE_JSON, packageJson } from '@infrastructure/shared';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import compression from 'compression';
import { json, urlencoded } from 'express';
import helmet from 'helmet';

@Module({
  providers: [{ provide: PACKAGE_JSON, useValue: packageJson }],
})
export class MiddlewaresModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        compression(),
        helmet(),
        json({ limit: '10mb' }),
        urlencoded({ limit: '10mb', extended: true }),
      )
      .forRoutes('*');
  }
}
