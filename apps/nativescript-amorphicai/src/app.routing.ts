// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
    outlet: 'homeTab',
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./features/messages/messages.module').then(
        (m) => m.MessagesModule
      ),
    outlet: 'messagesTab',
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
    outlet: 'profileTab',
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
