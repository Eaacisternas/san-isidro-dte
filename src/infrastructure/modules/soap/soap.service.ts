import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { SoapBody } from './dto';
import { ISoapPort } from '@domain/soap';
import { EnvironmentService } from '@infrastructure/application';
// const SoapRequest = require('easy-soap-request');
@Injectable()
export class SoapService implements ISoapPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
    private readonly environmentService: EnvironmentService,
  ) {}
  async prepareSoap(soapBody: SoapBody) {
    try {
      // const url = this.environmentService.get('SOAP_URL');
      const dtoResponse: string = (await this.sqlService.query(`SELECT
                  dte
                FROM
                  sssi2.doc_cobro
                WHERE
                  id_servicio = ${soapBody.id_service} AND
                  id_proceso='${soapBody.id_process}'
                  ORDER BY fecha_creacion DESC LIMIT 1`)) as string;
      Logger.log(dtoResponse);
      const xml = `<soapenv:Envelope
xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:proc="http://processimportacion.webservices.dte.azurian.com"
xmlns:xsd="http://processimportacion.webservices.dte.azurian.com/xsd">
   <soapenv:Header/>
   <soapenv:Body>
      <proc:importarDocumentos>
         <!--Optional:-->
 112770
         <proc:request>
            <!--Optional:-->
            <xsd:apiKey>89cdb8f0804363b4528205528193af4f0dce367da83ff5dc815f661b04ae</xsd:apiKey>
            <!--Optional:-->
            <xsd:archivo>dte22.txt</xsd:archivo>
            <!--Optional:-->
            <xsd:data>${JSON.stringify(dtoResponse)}</xsd:data>
            <!--Optional:-->
            <xsd:resolucionSii>80</xsd:resolucionSii>
            <!--Optional:-->
            <xsd:rutEmpresa>96889730</xsd:rutEmpresa>
         </proc:request>
      </proc:importarDocumentos>
   </soapenv:Body>
</soapenv:Envelope>`.replace(/\n|\r/g, '');
      // const headers = {
      //   'user-agent': 'PHP-SOAP/7.3.1',
      //   'Content-Type': 'text/xml; charset=UTF-8',
      //   soapAction: '',
      // };
      Logger.log(xml);
      // const { response } = await SoapRequest({
      //   url,
      //   headers,
      //   xml,
      //   timeout: 20000,
      // });
      // return response;
    } catch (error) {
      Logger.error(error);
      throw new Error('Error detail account DTE');
    }
  }
}
