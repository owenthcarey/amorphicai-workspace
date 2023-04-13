import { Component } from '@angular/core';

import { BaseComponent } from '@amorphicai-workspace/xplat/core';

@Component({
  selector: 'amorphicai-workspace-profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent extends BaseComponent {
  constructor() {
    super();
  }
}
