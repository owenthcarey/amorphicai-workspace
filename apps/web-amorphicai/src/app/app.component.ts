import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@amorphicai-workspace/xplat/web/features';

@Component({
  selector: 'amorphicai-workspace-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
