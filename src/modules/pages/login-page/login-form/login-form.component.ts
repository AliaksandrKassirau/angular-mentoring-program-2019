import { AuthService } from './../../../shared/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly authService: AuthService) { }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit(credentials): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(credentials);
    this.loginForm.reset();
  }

}
