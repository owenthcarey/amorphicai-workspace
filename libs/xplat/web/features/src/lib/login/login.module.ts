import { NgModule } from '@angular/core';
import { LoginModule as SharedLoginModule } from '@amorphicai-workspace/xplat/features';
import { UIModule } from '../ui';
import { LOGIN_COMPONENTS } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    SharedLoginModule,
    UIModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  declarations: [...LOGIN_COMPONENTS],
  exports: [...LOGIN_COMPONENTS],
})
export class LoginModule {}
