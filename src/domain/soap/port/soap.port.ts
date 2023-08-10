import { ISoapBody } from './../dto';
export const SOAP_PORT_ADAPTER = 'soap_port_adapter';
export interface ISoapPort {
  prepareSoap(dteBody: ISoapBody): Promise<unknown>;
}
