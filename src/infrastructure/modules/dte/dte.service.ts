import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { DteBody } from './dto/dte.dto';
import { IGenerateDteBody } from '@domain/dte';
// import { BranchResponseDto } from './entity/branch.entity';
import { IDtePort } from '@domain/dte';

@Injectable()
export class DteService implements IDtePort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async prepareDte(dteBody: DteBody): Promise<unknown> {
    try {
      return await this.sqlService.query(
        `CALL sssi2.SP_GEN_AUX_DTE(${dteBody.id_service}, '${dteBody.id_process}');`,
      );
    } catch (error) {
      Logger.error(error);
      throw new Error(`Error preparing DTE`);
    }
  }
  async accountDetail(dteBody: DteBody): Promise<unknown> {
    try {
      return await this.sqlService.query(
        `CALL sssi2.SP_DETALLE_CUENTA(${dteBody.id_service}, '${dteBody.id_process}');`,
      );
    } catch (error) {
      Logger.error(error);
      throw new Error('Error detail account DTE');
    }
  }
  async generateDte(generateDte: IGenerateDteBody): Promise<unknown> {
    try {
      return await this.sqlService.query(
        `CALL sssi2.SP_DTE_4_5(${generateDte.id_service}, '${generateDte.id_process}', ${generateDte.folio});`,
      );
    } catch (error) {
      Logger.error(error);
      throw new Error('Error generating DTE');
    }
  }
}
