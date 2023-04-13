import {IEnvironment} from "@amorphicai-workspace/xplat/core";
import {deepMerge} from "@amorphicai-workspace/xplat/utils";
import {environmentBase} from "./environment.base";

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
  firebase: {
    appId: process.env.WEB_APP_FIREBASE_APP_ID,
    apiKey: process.env.WEB_APP_FIREBASE_API_KEY,
    authDomain: process.env.WEB_APP_FIREBASE_AUTH_DOMAIN,
    measurementId: process.env.WEB_APP_FIREBASE_MEASUREMENT_ID,
    messagingSenderId: process.env.WEB_APP_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.WEB_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.WEB_APP_FIREBASE_STORAGE_BUCKET
  }
});
