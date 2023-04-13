import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {BaseComponent} from '@amorphicai-workspace/xplat/core';
import {CdkDragEnd} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from "@amorphicai-workspace/xplat/web/features";
import {Auth, authState, User} from '@angular/fire/auth';
import {Subscription} from 'rxjs';

@Component({
  selector: 'amorphicai-workspace-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnDestroy {
  @ViewChild('topCard', {read: ElementRef}) topCard?: ElementRef;
  @ViewChild('bottomCard', {read: ElementRef}) bottomCard?: ElementRef;

  images = [
    'https://via.placeholder.com/300x200/FF5733',
    'https://via.placeholder.com/300x200/FFBD33',
    'https://via.placeholder.com/300x200/75FF33',
    'https://via.placeholder.com/300x200/33FF57',
  ];

  topImageUrl = this.images[0];
  bottomImageUrl = this.images[1];
  imageIndex = 1;
  authStateSubscription?: Subscription;

  constructor(private dialog: MatDialog, private auth: Auth) {
    super();
    this.authStateSubscription = authState(this.auth).subscribe((user: User | null) => {
      console.log('Firebase userId:', user?.uid);
    });
    this.auth.signOut();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.authStateSubscription?.unsubscribe();
  }

  onDragEnd(event: CdkDragEnd) {
    const topCardEl: HTMLElement = this.topCard?.nativeElement;
    const bottomCardEl: HTMLElement = this.bottomCard?.nativeElement;

    const {x} = event.distance;
    const threshold = topCardEl.offsetWidth / 4;

    if (Math.abs(x) > threshold) {
      // Swiped far enough; move card off screen
      topCardEl.style.transition = 'transform 0.5s';
      topCardEl.style.transform = `translate(${x < 0 ? '-' : ''}200%, 0)`;

      // Update the images after the swipe transition is complete
      setTimeout(() => {
        this.updateImages();
        topCardEl.style.transition = '';
        topCardEl.style.transform = '';
      }, 500);
    } else {
      // Swiped not far enough; return card to original position
      topCardEl.style.transition = 'transform 0.5s';
      topCardEl.style.transform = 'translate(0, 0)';

      setTimeout(() => {
        topCardEl.style.transition = '';
      }, 500);
    }

    this.openLoginDialog();
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

  updateImages() {
    this.imageIndex = (this.imageIndex + 1) % this.images.length;
    this.bottomImageUrl = this.topImageUrl;
    this.topImageUrl = this.images[this.imageIndex];
  }
}
