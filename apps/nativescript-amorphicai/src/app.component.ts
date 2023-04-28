import { Component } from '@angular/core';
import { AppService } from '@amorphicai-workspace/xplat/nativescript/core';
import { AppBaseComponent } from '@amorphicai-workspace/xplat/nativescript/features';
import { Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'amorphicai-workspace-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor(
    appService: AppService,
    private router: Router,
    private routerExtensions: RouterExtensions
  ) {
    super(appService);
  }

  onSelectedIndexChanged(args: any) {
    console.log('onSelectedIndexChanged: ', args.newIndex);
    const selectedIndex = args.newIndex;
    switch (selectedIndex) {
      case 0:
        this.routerExtensions.navigate([{ outlets: { homeTab: ['home'] } }]);
        break;
      case 1:
        this.routerExtensions.navigate([
          { outlets: { messagesTab: ['messages'] } },
        ]);
        break;
      case 2:
        this.routerExtensions.navigate([
          { outlets: { profileTab: ['profile'] } },
        ]);
        break;
    }
  }
}
