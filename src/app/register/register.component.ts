import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../core/api/services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../core/api/models';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private vendorId: string;
  vendor$: Observable<Vendor>;

  private passwordMismatch: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password &&
      confirmPassword &&
      password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  };
  vendorForm = new FormGroup({
    email: new FormControl(),
    mobilePhone: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  }, {validators: [this.passwordMismatch] });
  hide = true;

  get mobilePhone() {
    return this.vendorForm.get('mobilePhone');
  }
  get password() {
    return this.vendorForm.get('password');
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly vendors: VendorsService
  ) {}

  ngOnInit(): void {
    this.vendorId = this.route.snapshot.params['id'];
    this.vendor$ = this.vendors
      .getVendor({ id: this.vendorId })
      .pipe(tap((vendor) => this.vendorForm.patchValue(vendor)));
  }

  register() {
    if (this.vendorForm.invalid) {
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
