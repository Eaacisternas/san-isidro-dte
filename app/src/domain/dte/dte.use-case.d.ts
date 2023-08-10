import { IDtePort } from './port';
import { IDteBody, IGenerateDteBody } from './dto';
export declare class DteUseCase {
    private readonly dtePort;
    constructor(dtePort: IDtePort);
    prepareDte(dteBoby: IDteBody): Promise<unknown>;
    accountDetail(dteBoby: IDteBody): Promise<unknown>;
    generateDte(generateDte: IGenerateDteBody): Promise<unknown>;
}
