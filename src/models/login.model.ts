import { IFidoCredential } from './fidoCredential.model';
import { ILoginUri } from './loginUri.model';

export interface ILogin {
  uris: ILoginUri[];
  username?: string;
  password: string;
  totp?: string;
  fido2Credentials?: IFidoCredential[];
}
