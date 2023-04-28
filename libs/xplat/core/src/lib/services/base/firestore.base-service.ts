import { Observable } from 'rxjs';
import { User } from '../../models';

export abstract class FirestoreBaseService {
  readonly usersCollectionPath = 'users';
  readonly usersConfidentialCollectionPath = 'usersConfidential';

  // abstract getDocument(path: string): Observable<any>;
  // abstract getRelatedDocuments(id: string, category: string): Observable<any[]>;
  abstract addNewUser(user: User): Promise<void>;
  abstract checkIfUserExists(userId: string): Promise<boolean>;
  abstract checkIfUsernameExists(username: string): Promise<boolean>;
}
