import { IDteBody, IGenerateDteBody } from './../dto';
export declare const DTE_PORT_ADAPTER = "dte_port_adapter";
export interface IDtePort {
    prepareDte(dteBody: IDteBody): Promise<unknown>;
    accountDetail(dteBody: IDteBody): Promise<unknown>;
    generateDte(generateDte: IGenerateDteBody): Promise<unknown>;
}
