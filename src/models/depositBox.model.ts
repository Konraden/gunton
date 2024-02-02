import { Folder } from './folder.model';
import { Secret } from './secret.model';

export type DepositBox = {
  encrypted: boolean;
  folders: Folder[];
  items: Secret[];
};
