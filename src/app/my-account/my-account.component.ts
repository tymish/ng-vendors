import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VendorDto } from '../core/api/models';
import { VendorsService } from '../core/api/services';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(
    private readonly vendor: VendorsService,
    private readonly auth: AuthService
  ) { }

  vendor$: Observable<VendorDto>;

  ngOnInit(): void {
    this.vendor$ = this.auth.user$.pipe(switchMap(user => 
       this.vendor.getVendor({id: user.vendorId})
    ))
  }

}
