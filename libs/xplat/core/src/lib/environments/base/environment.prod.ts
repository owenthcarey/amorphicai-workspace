import { IEnvironment } from '@amorphicai-workspace/xplat/core';
import { deepMerge } from '@amorphicai-workspace/xplat/utils';
import { environmentBase } from './environment.base';
import { secrets } from './secrets';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
  firebase: {
    apiKey: secrets.WEB_APP_FIREBASE_API_KEY,
    appId: secrets.WEB_APP_FIREBASE_APP_ID,
    authDomain: secrets.WEB_APP_FIREBASE_AUTH_DOMAIN,
    measurementId: secrets.WEB_APP_FIREBASE_MEASUREMENT_ID,
    messagingSenderId: secrets.WEB_APP_FIREBASE_MESSAGING_SENDER_ID,
    projectId: secrets.WEB_APP_FIREBASE_PROJECT_ID,
    storageBucket: secrets.WEB_APP_FIREBASE_STORAGE_BUCKET,
  },
});
