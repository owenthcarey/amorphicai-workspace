import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Gender, User } from '@amorphicai-workspace/xplat/core';
import { LoginUserFormBaseComponent } from '@amorphicai-workspace/xplat/features';
import { FirestoreService } from '@amorphicai-workspace/xplat/web/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'amorphicai-workspace-login-user-form',
  templateUrl: 'login-user-form.component.html',
  styleUrls: ['login-user-form.component.scss'],
})
export class LoginUserFormComponent extends LoginUserFormBaseComponent {
  userForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    username: [null, Validators.required],
    birthdate: [null],
    gender: [null],
    countryCode: [null],
  });
  usernameExists: boolean | null = null;
  genders = Object.values(Gender);

  constructor(
    private auth: Auth,
    private firestoreService: FirestoreService,
    private fb: FormBuilder
  ) {
    super();
  }

  async onSubmit() {
    const userId = (await this.auth.currentUser)?.uid;
    const user = new User(
      this.userForm.controls['birthdate'].value ?? undefined,
      this.userForm.controls['countryCode'].value ?? undefined,
      new Date(),
      this.userForm.controls['firstName'].value ?? undefined,
      this.userForm.controls['gender'].value ?? undefined,
      undefined,
      this.userForm.controls['lastName'].value ?? undefined,
      userId,
      this.userForm.controls['username'].value ?? undefined
    );
    this.usernameExists = await this.firestoreService.checkIfUsernameExists(
      user.username ?? ''
    );
    if (!this.usernameExists) {
      this.firestoreService.addNewUser(user);
    }
    console.log('Username exists:', this.usernameExists);
    console.log(user.toObject());
  }

  async onInput() {
    if (this.userForm.controls['username'].valid) {
      this.usernameExists = await this.firestoreService.checkIfUsernameExists(
        this.userForm.controls['username'].value ?? ''
      );
    } else {
      this.usernameExists = null;
    }
  }
}
