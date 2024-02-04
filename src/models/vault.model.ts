import { IDepositBox } from './depositBox.model';

export interface IVault {
  vaultId: string;
  vaultName: string;
  depositBoxes: IDepositBox[];
}
