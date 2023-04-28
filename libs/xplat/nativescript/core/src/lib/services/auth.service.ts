import { Injectable } from '@angular/core';
import { AuthBaseService } from '@amorphicai-workspace/xplat/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AuthBaseService {
  constructor() {
    super();
  }
}
