import { Inject, Injectable } from '@nestjs/common';
import { DTE_PORT_ADAPTER, IDtePort } from './port';
import { IDteBody, IGenerateDteBody } from './dto';

@Injectable()
export class DteUseCase {
  constructor(
    @Inject(DTE_PORT_ADAPTER)
    private readonly dtePort: IDtePort,
  ) {}

  async prepareDte(dteBoby: IDteBody): Promise<unknown> {
    return this.dtePort.prepareDte(dteBoby);
  }
  async accountDetail(dteBoby: IDteBody): Promise<unknown> {
    return this.dtePort.accountDetail(dteBoby);
  }
  async generateDte(generateDte: IGenerateDteBody): Promise<unknown> {
    return this.dtePort.generateDte(generateDte);
  }
}
