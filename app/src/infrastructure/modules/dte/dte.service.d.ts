import { SqlService } from '@infrastructure/application/adapters/database';
import { DteBody } from './dto/dte.dto';
import { IGenerateDteBody } from '@domain/dte';
import { IDtePort } from '@domain/dte';
export declare class DteService implements IDtePort {
    private readonly sqlService;
    constructor(sqlService: SqlService);
    prepareDte(dteBody: DteBody): Promise<unknown>;
    accountDetail(dteBody: DteBody): Promise<unknown>;
    generateDte(generateDte: IGenerateDteBody): Promise<unknown>;
}
