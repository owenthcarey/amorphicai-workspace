import { Injectable } from '@nestjs/common';
import { User } from '../../../../libs/xplat/core/src/lib/models/user.model';
// import { User } from '@amorphicai-workspace/xplat/core';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const user = new User();
    console.log('User:', user);
    return { message: 'Hello API' };
  }
}
