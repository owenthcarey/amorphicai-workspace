import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '@amorphicai-workspace/xplat/core';

@Component({
  selector: 'amorphicai-workspace-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.scss'],
})
export class MessagesComponent extends BaseComponent {
  messages: string[] = [];

  constructor(private router: Router) {
    super();
    this.generateFakeData();
  }

  generateFakeData(): void {
    for (let i = 0; i < 1000; i++) {
      this.messages.push(`Message #${i}`);
    }
  }

  goToMessageDetail(index: number): void {
    // Implement your navigation logic here, for example:
    this.router.navigate(['/messages', index]);
  }
}
