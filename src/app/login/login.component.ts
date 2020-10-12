import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFormGroup } from '@rxweb/types';
import { LoginVendorCommand } from '../core/api/models/login-vendor-command';
import { VendorsService } from '../core/api/services';

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
  constructor(private readonly vendors: VendorsService) {}

  form: IFormGroup<LoginForm>;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    }) as IFormGroup<LoginForm>;
  }

  login() {
    this.vendors.loginVendor({
      body: {
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      },
    }).subscribe();
  }
}
