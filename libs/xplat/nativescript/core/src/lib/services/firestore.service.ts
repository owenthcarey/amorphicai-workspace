import { Injectable } from '@angular/core';
import { FirestoreBaseService, User } from '@amorphicai-workspace/xplat/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService extends FirestoreBaseService {
  constructor() {
    super();
  }

  addNewUser(user: User): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }

  checkIfUserExists(userId: string): Promise<boolean> {
    // TODO
    return Promise.resolve(false);
  }
}
