import { Injectable } from '@nestjs/common';
import { Gender } from '../../../../libs/xplat/core/src/lib/enums/gender.enum';
import { User } from '../../../../libs/xplat/core/src/lib/models/user.model';
// import { User } from '@amorphicai-workspace/xplat/core';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const user = new User();
    console.log('User:', user);
    return { message: 'Hello API' };
  }

  getUsers(): User[] {
    const users: User[] = [];
    for (let i = 0; i < 1000; i++) {
      const user = new User(
        new Date(),
        'US',
        new Date(),
        `First${i}`,
        i % 2 === 0 ? Gender.Male : Gender.Female,
        [52.52, 13.405],
        `Last${i}`,
        undefined,
        `User${i}`
      );
      users.push(user);
    }
    return users;
  }
}
