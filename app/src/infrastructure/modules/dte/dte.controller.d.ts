import { DteUseCase } from '@domain/dte';
export declare class DteController {
    private readonly dteUseCase;
    constructor(dteUseCase: DteUseCase);
    prepareDte(serviceId: number, processId: string): Promise<unknown>;
    accountDetail(serviceId: number, processId: string): Promise<unknown>;
    generateDte(serviceId: number, processId: string, folio: number): Promise<unknown>;
}
