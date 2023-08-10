import { ApplicationModule } from '@infrastructure/application';
import { Module } from '@nestjs/common';
import { ModulesModule } from './modules';

@Module({
  imports: [ApplicationModule, ModulesModule],
})
export class InfrastructureModule {}
