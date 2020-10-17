import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormGroup } from '@rxweb/types';
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
  constructor(
    private readonly vendors: VendorsService,
    private readonly router: Router) {}

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
    }).subscribe(_ => this.router.navigate(['invoices']));
  }
}
