import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../core/api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { IFormGroup } from '@rxweb/types';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Vendor } from '../core/api/models';
import { RegisterForm, RegisterFormService } from './register.form.service';
import { AuthService } from '../core/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private vendorId: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly vendors: VendorsService,
    private readonly formService: RegisterFormService,
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  form: IFormGroup<RegisterForm>;
  vendor$: Observable<Vendor>;
  hide = true;

  get email() {
    return this.form.controls.email;
  }

  get mobilePhone() {
    return this.form.controls.mobilePhone;
  }

  get password() {
    return this.form.controls.password;
  }

  ngOnInit(): void {
    this.vendorId = this.route.snapshot.params['id'];
    this.form = this.formService.create();
    this.vendor$ = this.vendors
      .getVendor({ id: this.vendorId })
      .pipe(tap((vendor) => this.form.patchValue(vendor)));
  }

  register() {
    if (this.form.invalid) {
      alert('invalid');
      return;
    }

    this.vendors
      .registerVendor({
        body: {
          vendorId: this.vendorId,
          mobilePhone: this.mobilePhone.value,
          password: this.password.value,
        },
      })
      .pipe(switchMap(() => this.auth.login$(this.email.value, this.password.value)))
      .subscribe(() => this.router.navigate(['/']));
  }
}
