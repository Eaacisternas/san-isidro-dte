import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { DteModule } from './dte';
import { SoapModule } from './soap';

@Module({
  imports: [HealthModule, DteModule, SoapModule],
})
export class ModulesModule {}
