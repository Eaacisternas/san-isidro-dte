import {
  EnvironmentService,
  enableVersioning,
  setGlobalPrefix,
  setSwagger,
} from '@infrastructure/application';
import { packageJson } from '@infrastructure/shared';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Express } from 'express';
import { AppModule } from './app.module';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  setGlobalPrefix(app);
  enableVersioning(app);

  setSwagger(app, packageJson);

  const express = app.getHttpAdapter().getInstance() as Express;
  express.set('etag', false);

  const environmentService = app.get(EnvironmentService);

  const port = environmentService.get('PORT');

  await app.listen(port, () => {
    Logger.log(`${packageJson.name} is running on port ${port}`);
    Logger.log(
      `Please remember read README file and delete this line (./src/main.ts:line 30-32)`,
    );
  });
}

bootstrap();
