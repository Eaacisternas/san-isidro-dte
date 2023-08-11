import { SoapUseCase } from '@domain/soap';
import { Controller, Get, Query } from '@nestjs/common';
import { SoapBody } from './dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('SOAP Consume')
@Controller('soap')
export class SoapController {
  constructor(private readonly soapUseCase: SoapUseCase) {}

  @Get('prepareSoap')
  @ApiOperation({ summary: 'Preparing query to SOAP process' })
  @ApiResponse({ description: 'Return dteinfromation in xml' })
  async prepareDte(
    @Query('serviceId') serviceId: number,
    @Query('processId') processId: string,
  ) {
    const soapBody = new SoapBody();
    soapBody.id_service = serviceId;
    soapBody.id_process = processId;
    return await this.soapUseCase.prepareSoap(soapBody);
  }
}
