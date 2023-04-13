import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {PROFILE_COMPONENTS, ProfileComponent} from './components';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...PROFILE_COMPONENTS],
  exports: [...PROFILE_COMPONENTS],
})
export class ProfileModule {}
