import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../core/api/services';
import { ActivatedRoute } from '@angular/router';
import { IFormGroup } from '@rxweb/types';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Vendor } from '../core/api/models';
import { RegisterForm, RegisterFormService } from './register.form.service';


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
    private readonly formService: RegisterFormService
  ) {}

  form: IFormGroup<RegisterForm>;
  vendor$: Observable<Vendor>;
  hide = true;

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
      .subscribe();
  }
}
