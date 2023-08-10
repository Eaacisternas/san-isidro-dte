import {
  enableVersioning,
  setGlobalPrefix,
  setSwagger,
} from '@infrastructure/application';
import { packageJson } from '@infrastructure/shared';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';
import { Express } from 'express';
import { AppModule } from './app.module';

let server: Handler;
let stage = '';

const binaryMimeTypes = ['application/pdf'];

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule, { cors: true });

  setGlobalPrefix(app);
  enableVersioning(app);
  setSwagger(app, packageJson);

  const express = app.getHttpAdapter().getInstance() as Express;
  express.set('etag', false);

  await app.init();

  return serverlessExpress({ app: express, binaryMimeTypes });
}

type EventType = {
  path: string;
  requestContext: {
    stage: string;
  };
};

export const handler: Handler<EventType> = async (event, context, callback) => {
  Logger.log(`Event: ${JSON.stringify(event)}`);
  Logger.log(`requestContext: ${JSON.stringify(event.requestContext)}`);

  if (!stage || stage === '') stage = event.requestContext.stage;
  Logger.log(`stage: ${stage}`);

  event.path = event.path.includes('swagger-ui')
    ? `api${event.path}`
    : event.path;

  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
