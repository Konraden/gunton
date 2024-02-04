import { ILogin } from './login.model';
import { IPasswordHistory } from './passwordHistory.model';

export interface ISecret {
  passwordHistory?: IPasswordHistory;
  revisionDate: Date;
  creationDate: Date;
  deletedDate?: Date;
  id: string;
  organizationId?: string;
  folderId?: string;
  type: number;
  reprompt: number;
  name: string;
  notes?: string;
  favorite: boolean;
  login: ILogin;
  collectionIds?: string[];
}
