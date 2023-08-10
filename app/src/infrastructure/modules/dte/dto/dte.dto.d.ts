import { IDteBody, IGenerateDteBody } from '@domain/dte';
export declare class DteBody implements IDteBody {
    id_service: number;
    id_process: string;
}
export declare class GenerateDteBody extends DteBody implements IGenerateDteBody {
    folio: number;
}
