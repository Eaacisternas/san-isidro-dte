import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { SoapBody } from './dto';
const SoapRequest = require('easy-soap-request') as unknown;
@Injectable()
export class SoapService {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}
  async prepareSoap(soapBody: SoapBody) {
    try {
      const dtoResponse: string = (await this.sqlService.query(`SELECT
                  dte
                FROM
                  sssi2.doc_cobro
                WHERE
                  id_servicio = ${soapBody.id_service} AND
                  id_proceso='${soapBody.id_process}'
                  ORDER BY fecha_creacion DESC LIMIT 1`)) as string;
      Logger.log(dtoResponse);
      // const headers = {
      //   'Content-Type': 'text/xml; charset=UTF-8',
      //   soapAction: '',
      // };
      const xml = `
      <con:soapui-project id="ef3cbc0a-6f95-44d7-940a-0ed7ddac19bb" activeEnvironment="Default" name="AZURIAN DTE" resourceRoot="" soapui-version="5.7.1" abortOnError="false" runType="SEQUENTIAL" xmlns:con="http://eviware.com/soapui/config"><con:settings/><con:interface xsi:type="con:WsdlInterface" id="abbeded9-f042-46cc-bd6b-7552a0dc6062" wsaVersion="NONE" name="ProcessDTEServiceSoap12Binding" type="wsdl" bindingName="{http://processimportacion.webservices.dte.azurian.com}ProcessDTEServiceSoap12Binding" soapVersion="1_2" anonymous="optional" definition="https://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService?wsdl" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><con:settings/><con:definitionCache/><con:endpoints><con:endpoint>http://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService.ProcessDTEServiceHttpSoap12Endpoint/</con:endpoint></con:endpoints><con:operation id="086cdc51-97f2-4915-a69c-6a6f0984c699" isOneWay="false" action="urn:importarDocumentos" name="importarDocumentos" bindingOperationName="importarDocumentos" type="Request-Response" inputName="" receivesAttachments="false" sendsAttachments="false" anonymous="optional"><con:settings/><con:call id="141cdaee-6ebe-4c89-a619-ced06d99d78c" name="Certificacion"><con:settings><con:setting id="com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers">&lt;xml-fragment/></con:setting></con:settings><con:encoding>UTF-8</con:encoding><con:endpoint>http://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService.ProcessDTEServiceHttpSoap12Endpoint/</con:endpoint><con:request><![CDATA[<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:proc="http://processimportacion.webservices.dte.azurian.com" xmlns:xsd="http://processimportacion.webservices.dte.azurian.com/xsd">\r
   <soap:Header/>\r
   <soap:Body>\r
      <proc:importarDocumentos>\r
         <!--Optional:-->\r
         <proc:request>\r
            <!--Optional:-->\r
            <xsd:apiKey>e8477d5d78cea333ae73bc241562cc37a11c2277357412945c3cafa7b68a</xsd:apiKey>\r
            <!--Optional:-->\r
            <xsd:archivo>Factura_12345.txt?</xsd:archivo>\r
            <!--Optional:-->\r
            <xsd:data>${JSON.stringify(dtoResponse)}</xsd:data>\r
            <!--Optional:-->\r
            <xsd:resolucionSii>0</xsd:resolucionSii>\r
            <!--Optional:-->\r
            <xsd:rutEmpresa>96889730</xsd:rutEmpresa>\r
         </proc:request>\r
      </proc:importarDocumentos>\r
   </soap:Body>\r
</soap:Envelope>]]></con:request><con:credentials><con:authType>No Authorization</con:authType></con:credentials><con:jmsConfig JMSDeliveryMode="PERSISTENT"/><con:jmsPropertyConfig/><con:wsaConfig mustUnderstand="NONE" version="200508" action="urn:importarDocumentos"/><con:wsrmConfig version="1.2"/></con:call></con:operation></con:interface><con:interface xsi:type="con:WsdlInterface" id="6d8dd654-021f-4f07-83a1-c3c1f4f6165c" wsaVersion="NONE" name="ProcessDTEServiceSoap11Binding" type="wsdl" bindingName="{http://processimportacion.webservices.dte.azurian.com}ProcessDTEServiceSoap11Binding" soapVersion="1_1" anonymous="optional" definition="https://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService?wsdl" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><con:settings><con:setting id="CreateWsdlDocumentationAction@report-directory">F:\Escritorio\AZURIAN DTE</con:setting></con:settings><con:definitionCache type="TEXT" rootPart="https://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService?wsdl"><con:part><con:url>https://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService?wsdl</con:url><con:content><![CDATA[<wsdl:definitions targetNamespace="http://processimportacion.webservices.dte.azurian.com" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:ns="http://processimportacion.webservices.dte.azurian.com" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ns1="http://org.apache.axis2/xsd" xmlns:ax219="http://processimportacion.webservices.dte.azurian.com/xsd" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:wsaw="http://www.w3.org/2006/05/addressing/wsdl">
  <wsdl:documentation>Please Type your service description here</wsdl:documentation>
  <wsdl:types>
    <xs:schema attributeFormDefault="qualified" elementFormDefault="qualified" targetNamespace="http://processimportacion.webservices.dte.azurian.com/xsd">
      <xs:complexType name="DTEProcessRequest">
        <xs:sequence>
          <xs:element minOccurs="0" name="apiKey" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="archivo" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="data" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="resolucionSii" type="xs:int"/>
          <xs:element minOccurs="0" name="rutEmpresa" type="xs:int"/>
        </xs:sequence>
      </xs:complexType>
      <xs:complexType name="DTEProcessResponse">
        <xs:sequence>
          <xs:element minOccurs="0" name="codigoInternoReceptor" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="codigoRespuesta" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="descripcionRespuesta" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="docDte" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="idTipoDocumento" type="xs:int"/>
          <xs:element minOccurs="0" name="mapeado" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="mapeadoAn" nillable="true" type="xs:string"/>
          <xs:element minOccurs="0" name="numeroFolio" type="xs:long"/>
          <xs:element minOccurs="0" name="rutReceptor" type="xs:long"/>
          <xs:element minOccurs="0" name="tipoReceptorElectronico" type="xs:int"/>
        </xs:sequence>
      </xs:complexType>
    </xs:schema>
    <xs:schema attributeFormDefault="qualified" elementFormDefault="qualified" targetNamespace="http://processimportacion.webservices.dte.azurian.com" xmlns:ax220="http://processimportacion.webservices.dte.azurian.com/xsd">
      <xs:import namespace="http://processimportacion.webservices.dte.azurian.com/xsd"/>
      <xs:element name="importarDocumentos">
        <xs:complexType>
          <xs:sequence>
            <xs:element minOccurs="0" name="request" nillable="true" type="ax219:DTEProcessRequest"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
      <xs:element name="importarDocumentosResponse">
        <xs:complexType>
          <xs:sequence>
            <xs:element minOccurs="0" name="return" nillable="true" type="ax219:DTEProcessResponse"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:schema>
  </wsdl:types>
  <wsdl:message name="importarDocumentosRequest">
    <wsdl:part name="parameters" element="ns:importarDocumentos"/>
  </wsdl:message>
  <wsdl:message name="importarDocumentosResponse">
    <wsdl:part name="parameters" element="ns:importarDocumentosResponse"/>
  </wsdl:message>
  <wsdl:portType name="ProcessDTEServicePortType">
    <wsdl:operation name="importarDocumentos">
      <wsdl:input message="ns:importarDocumentosRequest" wsaw:Action="urn:importarDocumentos"/>
      <wsdl:output message="ns:importarDocumentosResponse" wsaw:Action="urn:importarDocumentosResponse"/>
    </wsdl:operation>
  </wsdl:portType>
  <wsdl:binding name="ProcessDTEServiceSoap11Binding" type="ns:ProcessDTEServicePortType">
    <soap:binding transport="http://schemas.xmlsoap.org/soap/http" style="document"/>
    <wsdl:operation name="importarDocumentos">
      <soap:operation soapAction="urn:importarDocumentos" style="document"/>
      <wsdl:input>
        <soap:body use="literal"/>
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:binding name="ProcessDTEServiceSoap12Binding" type="ns:ProcessDTEServicePortType">
    <soap12:binding transport="http://schemas.xmlsoap.org/soap/http" style="document"/>
    <wsdl:operation name="importarDocumentos">
      <soap12:operation soapAction="urn:importarDocumentos" style="document"/>
      <wsdl:input>
        <soap12:body use="literal"/>
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:binding name="ProcessDTEServiceHttpBinding" type="ns:ProcessDTEServicePortType">
    <http:binding verb="POST"/>
    <wsdl:operation name="importarDocumentos">
      <http:operation location="importarDocumentos"/>
      <wsdl:input>
        <mime:content type="application/xml" part="parameters"/>
      </wsdl:input>
      <wsdl:output>
        <mime:content type="application/xml" part="parameters"/>
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:service name="ProcessDTEService">
    <wsdl:port name="ProcessDTEServiceHttpSoap11Endpoint" binding="ns:ProcessDTEServiceSoap11Binding">
      <soap:address location="http://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService.ProcessDTEServiceHttpSoap11Endpoint/"/>
    </wsdl:port>
    <wsdl:port name="ProcessDTEServiceHttpSoap12Endpoint" binding="ns:ProcessDTEServiceSoap12Binding">
      <soap12:address location="http://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService.ProcessDTEServiceHttpSoap12Endpoint/"/>
    </wsdl:port>
    <wsdl:port name="ProcessDTEServiceHttpEndpoint" binding="ns:ProcessDTEServiceHttpBinding">
      <http:address location="http://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService.ProcessDTEServiceHttpEndpoint/"/>
    </wsdl:port>
  </wsdl:service>
</wsdl:definitions>]]></con:content><con:type>http://schemas.xmlsoap.org/wsdl/</con:type></con:part></con:definitionCache><con:endpoints><con:endpoint>http://dteqa.azuriandte.com/dte-ws-services/services/ProcessDTEService.ProcessDTEServiceHttpSoap11Endpoint/</con:endpoint></con:endpoints><con:operation id="84f5dba0-f955-405e-8453-0bbd27b58257" isOneWay="false" action="urn:importarDocumentos" name="importarDocumentos" bindingOperationName="importarDocumentos" type="Request-Response" inputName="" receivesAttachments="false" sendsAttachments="false" anonymous="optional"><con:settings/><con:call id="cd2f8458-f02b-44b5-b036-bef0fdceec88" name="Produccion"><con:settings><con:setting id="com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers">&lt;xml-fragment/></con:setting></con:settings><con:encoding>UTF-8</con:encoding><con:endpoint>https://dte.azuriandte.com/dte-ws-services/services/ProcessDTEService.ProcessDTEServiceHttpSoap11Endpoint/</con:endpoint><con:request><![CDATA[<soapenv:Envelope
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
</soapenv:Envelope>]]></con:request><con:credentials><con:authType>No Authorization</con:authType></con:credentials><con:jmsConfig JMSDeliveryMode="PERSISTENT"/><con:jmsPropertyConfig/><con:wsaConfig mustUnderstand="NONE" version="200508" action="urn:importarDocumentos"/><con:wsrmConfig version="1.2"/></con:call></con:operation></con:interface><con:properties/><con:wssContainer/><con:oAuth2ProfileContainer/><con:oAuth1ProfileContainer/><con:sensitiveInformation/></con:soapui-project>
      `;
      Logger.log(xml);
      return xml;
    } catch (error) {
      Logger.error(error);
      throw new Error('Error detail account DTE');
    }
  }
}
