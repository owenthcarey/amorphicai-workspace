import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@amorphicai-workspace/xplat/core';

@Component({
  selector: 'amorphicai-workspace-messages-detail',
  templateUrl: 'messages-detail.component.html',
  styleUrls: ['messages-detail.component.scss'],
})
export class MessagesDetailComponent extends BaseComponent {
  message: string;

  constructor(private route: ActivatedRoute) {
    super();
    const index = Number(this.route.snapshot.paramMap.get('index'));
    this.message = `Message #${index}`;
  }
}
