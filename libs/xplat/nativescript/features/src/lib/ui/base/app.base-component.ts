import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@amorphicai-workspace/xplat/core';
import { AppService } from '@amorphicai-workspace/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
