import { DTE_PORT_ADAPTER, DteUseCase } from '@domain/dte';
import { Module } from '@nestjs/common';
import { DteController } from './dte.controller';
import { DteService } from './dte.service';
@Module({
  controllers: [DteController],
  providers: [DteUseCase, { provide: DTE_PORT_ADAPTER, useClass: DteService }],
})
export class DteModule {}
