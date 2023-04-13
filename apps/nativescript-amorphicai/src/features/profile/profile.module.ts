import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {PROFILE_COMPONENTS, ProfileComponent} from './components';
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "@nativescript/angular";

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...PROFILE_COMPONENTS],
  exports: [...PROFILE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
