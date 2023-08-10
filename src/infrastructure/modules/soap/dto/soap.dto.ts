import { ISoapBody } from '@domain/soap';

export class SoapBody implements ISoapBody {
  id_service: number;
  id_process: string;
}
