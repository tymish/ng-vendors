import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormGroup } from '@rxweb/types';
import { AuthService } from '../core/auth/auth.service';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  form: IFormGroup<LoginForm>;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    }) as IFormGroup<LoginForm>;
  }

  login() {
    this.auth.login$(
      this.form.controls.email.value,
      this.form.controls.password.value
    ).subscribe(() => this.router.navigate(['invoices']));
  }
}
