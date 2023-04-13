import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {MESSAGES_COMPONENTS, MessagesComponent} from './components';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    component: MessagesComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...MESSAGES_COMPONENTS],
  exports: [...MESSAGES_COMPONENTS],
})
export class MessagesModule {}
