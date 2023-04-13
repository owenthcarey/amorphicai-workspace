import { Component } from '@angular/core';

import { LoginBaseComponent } from '@amorphicai-workspace/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'amorphicai-workspace-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends LoginBaseComponent {
  constructor() {
    super();
  }
}
