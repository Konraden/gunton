import { UriMatchType } from '../enums/uriMatchType.enum';

export interface ILoginUri {
  match: UriMatchType;
  uri: string;
}
