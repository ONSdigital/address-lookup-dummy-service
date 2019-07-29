import { Request, Response } from 'express';
import { IAddressRecord, IAddressRecordLanguage } from './address.model';

const addresses: IAddressRecord[] = require('./dummy-addresses.json');

export default function searchAddresses(request: Request, response: Response): void {
  const lang = request.query.lang;
  let language: (keyof IAddressRecord) = lang;

  if (lang === 'en') {
    language = 'en-gb';
  }

  const responseData = {
    addresses: addresses.map(address => ({
      uprn: address.uprn,
      text: Object.values(<IAddressRecordLanguage>address[language]).filter(value => !!value).join(', '),
    })),
    count: 10,
  };

  response.setHeader('Access-Control-Allow-Origin', <string>request.headers.origin);

  response.send(responseData);
}
