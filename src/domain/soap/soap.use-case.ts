import { Inject, Injectable } from '@nestjs/common';
import { ISoapBody } from './dto';
import { SOAP_PORT_ADAPTER, ISoapPort } from './port';

@Injectable()
export class SoapUseCase {
  constructor(
    @Inject(SOAP_PORT_ADAPTER)
    private readonly soapPort: ISoapPort,
  ) {}

  async prepareSoap(soapBoby: ISoapBody): Promise<unknown> {
    return this.soapPort.prepareSoap(soapBoby);
  }
}
