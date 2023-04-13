import { Component } from '@angular/core';

import { BaseComponent } from '@amorphicai-workspace/xplat/core';

@Component({
  selector: 'amorphicai-workspace-messages',
  templateUrl: 'messages.component.html',
})
export class MessagesComponent extends BaseComponent {
  constructor() {
    super();
  }
}
