import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from '@nativescript/angular';
import { enableProdMode } from '@angular/core';
import { environment } from '@amorphicai-workspace/xplat/core';
import { AppModule } from './app.module';
import { firebase } from '@nativescript/firebase-core';

if (environment.production) {
  enableProdMode();
}

async function initializeFirebase() {
  const defaultApp = await firebase().initializeApp();
}

initializeFirebase();

require('@nativescript/canvas-polyfill');

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
