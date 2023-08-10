import { DteUseCase } from '@domain/dte';
import { Controller, Get, Query } from '@nestjs/common';
import { DteBody, GenerateDteBody } from './dto';

@Controller('dte')
export class DteController {
  constructor(private readonly dteUseCase: DteUseCase) {}

  @Get('pepareDte')
  async prepareDte(
    @Query('serviceId') serviceId: number,
    @Query('processId') processId: string,
  ) {
    const dteBody = new DteBody();
    dteBody.id_service = serviceId;
    dteBody.id_process = processId;
    return await this.dteUseCase.prepareDte(dteBody);
  }
  @Get('accountDetail')
  async accountDetail(
    @Query('serviceId') serviceId: number,
    @Query('processId') processId: string,
  ) {
    const dteBody = new DteBody();
    dteBody.id_service = serviceId;
    dteBody.id_process = processId;
    return await this.dteUseCase.accountDetail(dteBody);
  }
  @Get('generateDte')
  async generateDte(
    @Query('serviceId') serviceId: number,
    @Query('processId') processId: string,
    @Query('folio') folio: number,
  ) {
    const generateDte = new GenerateDteBody();
    generateDte.id_service = serviceId;
    generateDte.id_process = processId;
    generateDte.folio = folio;
    return await this.dteUseCase.generateDte(generateDte);
  }
}
