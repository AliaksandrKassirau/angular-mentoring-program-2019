import { AuthService } from './../../../shared/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private route: ActivatedRoute,
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
    console.log('DEBUG PLACEHOLDER', this.route);
    this.authService.login(credentials, 'courses');
    this.loginForm.reset();
  }
}
