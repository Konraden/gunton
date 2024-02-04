import { IFidoCredential } from './fidoCredential.model';
import { ILoginUri } from './loginUri.model';

export interface ILogin {
  fido2Credentials: IFidoCredential[];
  uris: ILoginUri[];
  username?: string;
  password?: string;
  totp?: string;
}
