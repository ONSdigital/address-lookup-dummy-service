import { Request, Response } from 'express';
import { IAddressRecord, IAddressRecordLanguage } from './address.model';

const addresses: IAddressRecord[] = require('./dummy-addresses.json');

export default function retrieveAddress(request: Request, response: Response): void {
  const uprn = request.query.q;
  const lang = request.query.lang;
  let language: (keyof IAddressRecord) = lang;

  if (lang === 'en') {
    language = 'en-gb';
  }

  const address = addresses.find(address => address.uprn === parseInt(uprn, 10));

  response.setHeader('Access-Control-Allow-Origin', <string>request.headers.origin);

  if (address) {
    const responseData = {
      uprn: address.uprn,
      ...(<IAddressRecordLanguage>address[language]),
    };

    response.send(responseData);
  } else {
    response.status(500);
    response.send();
  }
}
