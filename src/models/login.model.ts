import { FidoCredential } from "./fidoCredential.model";
import { LoginUri } from "./loginUri.model";

export type Login = {
    fido2Credentials: FidoCredential[];
    uris: LoginUri[];
    username?: string;
    password?: string;
    totp?: string;

}

