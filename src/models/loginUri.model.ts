import { UriMatchType } from '../enums/uriMatchType.enum';

export type LoginUri = {
  match: UriMatchType;
  uri: string;
};
