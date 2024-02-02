import { Login } from "./login.model";
import { PasswordHistory } from "./passwordHistory.model";

export type Secret = {
    passwordHistory?: PasswordHistory;
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
    login: Login;
    collectionIds?: string[];
    
}