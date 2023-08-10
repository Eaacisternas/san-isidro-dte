import { SOAP_PORT_ADAPTER, SoapUseCase } from '@domain/soap';
import { Module } from '@nestjs/common';
import { SoapController } from './soap.controller';
import { SoapService } from './soap.service';
@Module({
  controllers: [SoapController],
  providers: [
    SoapUseCase,
    { provide: SOAP_PORT_ADAPTER, useClass: SoapService },
  ],
})
export class SoapModule {}
