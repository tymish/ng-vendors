import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { InvoiceDto } from '../core/api/models';
import { VendorsService } from '../core/api/services';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  constructor(
    private readonly vendors: VendorsService,
    private readonly auth: AuthService
  ) {}

  invoices$: Observable<InvoiceDto[]>;

  ngOnInit(): void {
    this.invoices$ = this.auth.user$.pipe(
      concatMap((user) =>
        this.vendors.listVendorInvoices({
          id: user.vendorId
        })
      )
    );
  }
}
