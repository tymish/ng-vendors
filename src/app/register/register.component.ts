import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../core/api/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  constructor(private readonly vendors: VendorsService) { }

  ngOnInit(): void {
  }

  register() {
    this.vendors.registerVendor({body: {
      mobilePhone: '7806665555', 
      vendorId: 'guid'
    }}).subscribe();
  }
}
