import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../core/api/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private vendorId: string;
  hide = true;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly vendors: VendorsService) { }

  ngOnInit(): void {
    this.vendorId = this.route.snapshot.params['id']
  }

  register() {
    // Validate password matches and all that
    this.vendors.registerVendor({body: {
      mobilePhone: '7806665555',
      password: 'password',
      vendorId: this.vendorId
    }}).subscribe();
  }
}
