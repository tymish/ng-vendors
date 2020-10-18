import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InvoiceDto } from 'src/app/core/api/models';
import { InvoicesService } from 'src/app/core/api/services';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly invoices: InvoicesService
  ) {}

  invoice$: Observable<InvoiceDto>;

  ngOnInit(): void {
    const invoiceId = this.route.snapshot.params['id'];
    this.invoice$ = this.invoices.getInvoiceById({id: invoiceId });
  }
}
