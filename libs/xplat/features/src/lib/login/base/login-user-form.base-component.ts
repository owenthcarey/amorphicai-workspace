import { Directive } from '@angular/core';
import { BaseComponent } from '@amorphicai-workspace/xplat/core';

@Directive()
export abstract class LoginUserFormBaseComponent extends BaseComponent {
  public text: string = 'LoginUserForm';

  constructor() {
    super();
  }
}
