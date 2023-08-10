import { DteUseCase } from '@domain/dte';
import { Controller, Get, Query } from '@nestjs/common';
import { DteBody, GenerateDteBody } from './dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Generación DTE')
@Controller('dte')
export class DteController {
  constructor(private readonly dteUseCase: DteUseCase) {}

  @Get('pepareDte')
  @ApiOperation({ summary: 'Preparing query to DTE process' })
  @ApiResponse({ description: 'Return quantity rows prepare' })
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
  @ApiOperation({ summary: 'process account detail' })
  @ApiResponse({ description: 'Return quantity rows afected' })
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
  @ApiOperation({ summary: 'generate DTE field' })
  @ApiResponse({ description: 'Return quantity rows generate' })
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
