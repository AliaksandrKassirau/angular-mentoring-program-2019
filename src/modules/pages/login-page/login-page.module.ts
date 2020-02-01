import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from 'src/modules/shared/authentication/authentication.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationModule,
    MatButtonModule,
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
