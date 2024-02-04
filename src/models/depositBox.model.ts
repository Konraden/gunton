import { IFolder } from './folder.model';
import { ISecret } from './secret.model';

export interface IDepositBox {
  encrypted: boolean;
  folders: IFolder[];
  items: ISecret[];
}
