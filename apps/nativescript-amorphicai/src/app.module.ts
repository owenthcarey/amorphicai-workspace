// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@nativescript/angular';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NativeScriptMaterialBottomNavigationModule } from '@nativescript-community/ui-material-bottom-navigation/angular';
import { Canvas } from '@nativescript/canvas';

registerElement('Canvas', () => Canvas);

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NativeScriptMaterialBottomNavigationModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
