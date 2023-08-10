import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { DteModule } from './dte';

@Module({
  imports: [HealthModule, DteModule],
})
export class ModulesModule {}
