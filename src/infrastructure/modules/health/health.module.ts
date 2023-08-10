import { PACKAGE_JSON, packageJson } from '@infrastructure/shared';
import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService, { provide: PACKAGE_JSON, useValue: packageJson }],
})
export class HealthModule {}
