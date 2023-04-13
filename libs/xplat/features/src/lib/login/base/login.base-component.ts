import { Directive } from '@angular/core';
import { BaseComponent } from '@amorphicai-workspace/xplat/core';

@Directive()
export abstract class LoginBaseComponent extends BaseComponent {
  public text: string = 'Login';

  constructor() {
    super();
  }
}
