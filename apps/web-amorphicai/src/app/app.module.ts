import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

// app
import {CoreModule} from './core/core.module';
import {SharedModule} from './features/shared/shared.module';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {LoginModule, NavigationModule} from '@amorphicai-workspace/xplat/web/features';
import {environmentProd} from "@amorphicai-workspace/xplat/environments";

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    LoginModule,
    provideFirebaseApp(() => initializeApp(environmentProd.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
