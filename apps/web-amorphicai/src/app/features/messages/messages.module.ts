import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  MESSAGES_COMPONENTS,
  MessagesComponent,
  MessagesDetailComponent,
} from './components';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

export const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
  },
  {
    path: ':index',
    component: MessagesDetailComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), ScrollingModule],
  declarations: [...MESSAGES_COMPONENTS],
  exports: [...MESSAGES_COMPONENTS],
})
export class MessagesModule {}
