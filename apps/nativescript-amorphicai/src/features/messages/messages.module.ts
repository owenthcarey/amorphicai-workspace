import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {MESSAGES_COMPONENTS, MessagesComponent} from './components';
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "@nativescript/angular";
import {CollectionViewModule} from "@nativescript-community/ui-collectionview/angular";

export const routes: Routes = [
  {
    path: '',
    component: MessagesComponent
  }
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes), CollectionViewModule],
  declarations: [...MESSAGES_COMPONENTS],
  exports: [...MESSAGES_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class MessagesModule {}
