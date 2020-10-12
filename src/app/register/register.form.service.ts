import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { IFormGroup } from '@rxweb/types';

export interface RegisterForm {
  email: string;
  mobilePhone: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {
  create(): IFormGroup<RegisterForm> {
    return new FormGroup(
      {
        email: new FormControl(),
        mobilePhone: new FormControl(),
        password: new FormControl(),
        confirmPassword: new FormControl(),
      },
      { validators: [this.passwordMismatch] }
    ) as IFormGroup<RegisterForm>;
  }

  private passwordMismatch: ValidatorFn = (
    form: IFormGroup<RegisterForm>
  ): ValidationErrors | null => {
    const password = form.controls.password;
    const confirmPassword = form.controls.confirmPassword;
    return password &&
      confirmPassword &&
      password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  };
}
