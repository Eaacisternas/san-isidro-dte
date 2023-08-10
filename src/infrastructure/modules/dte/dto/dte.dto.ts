import { IDteBody, IGenerateDteBody } from '@domain/dte';

export class DteBody implements IDteBody {
  id_service: number;
  id_process: string;
}
export class GenerateDteBody extends DteBody implements IGenerateDteBody {
  folio: number;
}
