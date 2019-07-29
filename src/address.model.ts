export interface IAddressRecord {
  uprn: number;
  'en-gb': IAddressRecordLanguage;
  cy: IAddressRecordLanguage;
}

export interface IAddressRecordLanguage {
  line1: string;
  line2: string;
  town: string;
  county: string;
  postcode: string;
}
