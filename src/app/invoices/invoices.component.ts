import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDto } from '../core/api/models';
import { VendorsService } from '../core/api/services';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  constructor(private readonly vendors: VendorsService) {}

  invoices$: Observable<InvoiceDto[]>;

  ngOnInit(): void {
    this.invoices$ = this.vendors.listVendorInvoices({
      id: '014d9f31-6a28-4f5f-abfa-9f5ab04f93cc',
    });
  }
}
