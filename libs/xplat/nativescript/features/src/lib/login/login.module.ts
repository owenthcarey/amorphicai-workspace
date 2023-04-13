import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginModule as SharedLoginModule } from '@amorphicai-workspace/xplat/features';
import { UIModule } from '../ui/ui.module';
import { LOGIN_COMPONENTS } from './components';

@NgModule({
  imports: [SharedLoginModule, UIModule],
  declarations: [...LOGIN_COMPONENTS],
  exports: [...LOGIN_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule {}
