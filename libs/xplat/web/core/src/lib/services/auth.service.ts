import { Injectable } from '@angular/core';
import { AuthBaseService } from '@amorphicai-workspace/xplat/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AuthBaseService {
  constructor(private auth: Auth) {
    super();
  }

  async getCurrentUserId(): Promise<string | null> {
    const user = await authState(this.auth).pipe(first()).toPromise();
    return user ? user.uid : null;
  }
}
