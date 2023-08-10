import { GLOBAL_PREFIX } from '@infrastructure/shared';
import { INestApplication } from '@nestjs/common';

export function setGlobalPrefix(app: INestApplication) {
  app.setGlobalPrefix(GLOBAL_PREFIX);
}
