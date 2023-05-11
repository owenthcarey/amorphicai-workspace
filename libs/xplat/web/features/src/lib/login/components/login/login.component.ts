import { Component, OnDestroy, OnInit } from '@angular/core';

import { LoginBaseComponent } from '@amorphicai-workspace/xplat/features';

import { User } from '@amorphicai-workspace/xplat/core';

import {
  UserCredential,
  EmailAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import { Auth } from '@angular/fire/auth';
import { FirestoreService } from '@amorphicai-workspace/xplat/web/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginUserFormComponent } from '@amorphicai-workspace/xplat/web/features';

@Component({
  selector: 'amorphicai-workspace-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent
  extends LoginBaseComponent
  implements OnInit, OnDestroy
{
  private ui?: firebaseui.auth.AuthUI;

  constructor(
    private readonly auth: Auth,
    private firestoreService: FirestoreService,
    private dialog: MatDialog
  ) {
    super();
  }

  /**
   * Initialize FirebaseUI authentication and start the UI widget.
   */
  ngOnInit(): void {
    const uiConfig: firebaseui.auth.Config = {
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        // FacebookAuthProvider.PROVIDER_ID,
        // TwitterAuthProvider.PROVIDER_ID,
        // GithubAuthProvider.PROVIDER_ID,
        // EmailAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup',
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      callbacks: {
        signInSuccessWithAuthResult: (authResult: UserCredential) => {
          this.firestoreService
            .checkIfUserExists(authResult.user.uid)
            .then((userExists) => {
              console.log('User exists:', userExists);
              this.dialog.closeAll();
              if (!userExists) {
                this.dialog.open(LoginUserFormComponent);
              }
            });
          // Prevents redirect after authentication.
          return false;
        },
        uiShown: () => {
          // Handle any UI actions after the widget is shown, if needed.
        },
      },
    };
    this.ui = new firebaseui.auth.AuthUI(this.auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  /**
   * Clean up FirebaseUI AuthUI instance.
   */
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.ui?.delete();
  }

  // /**
  //  * Handle user creation with provided auth result.
  //  * @param authResult The authenticated user result.
  //  */
  // private async createAndStoreNewUser(
  //   authResult: UserCredential
  // ): Promise<void> {
  //   const geoPoint = await this.getUserGeolocation();
  //   const newUser = new User(
  //     undefined,
  //     undefined,
  //     new Date(),
  //     undefined,
  //     undefined,
  //     geoPoint,
  //     undefined,
  //     authResult.user.uid,
  //     undefined
  //   );
  //   // await this.firestoreService.addNewUser(newUser);
  // }
  //
  // /**
  //  * Get the user's geolocation coordinates as a tuple [latitude, longitude].
  //  * @returns A promise that resolves to a tuple [latitude, longitude] or rejects with an error.
  //  */
  // private async getUserGeolocation(): Promise<[number, number]> {
  //   return new Promise((resolve, reject) => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           resolve([position.coords.latitude, position.coords.longitude]);
  //         },
  //         (error) => {
  //           reject(error);
  //         },
  //         { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  //       );
  //     } else {
  //       reject(new Error('Geolocation is not supported by this browser.'));
  //     }
  //   });
  // }
}
