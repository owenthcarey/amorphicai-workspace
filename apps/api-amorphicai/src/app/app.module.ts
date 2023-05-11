import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const serviceAccount = require('./amorphicai-firebase-adminsdk-l3g42-1392f91715.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
}
