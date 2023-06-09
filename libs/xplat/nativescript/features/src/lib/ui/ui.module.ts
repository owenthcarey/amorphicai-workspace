import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
} from '@nativescript/angular';

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { UISharedModule } from '@amorphicai-workspace/xplat/features';
import { UI_COMPONENTS } from './components';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  TNSFontIconModule,
  UISharedModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UIModule {}
