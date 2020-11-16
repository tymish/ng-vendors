import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InvoiceDto, TimeEntryDto } from 'src/app/core/api/models';
import { InvoicesService } from 'src/app/core/api/services';

interface Row {
  date: string;
  hours: number;
  time: string;
  comments: string;
  amount: number;
}

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

  displayedColumns: string[] = [
    'date',
    'hours',
    'time',
    'comments',
    'amount'
  ];

  ngOnInit(): void {
    const invoiceId = this.route.snapshot.params['id'];
    this.invoice$ = this.invoices.getInvoiceById({id: invoiceId });
  }

  timeEntries(invoice: InvoiceDto): Row[] {
    return invoice.timeEntryDtos.map((timeEntry) => {
      return this.transform(timeEntry, invoice.vendorDto.hourlyPay);
    })
  }

  private transform(timeEntry: TimeEntryDto, pay: number): Row {
    return {
      date: this.parseDate(new Date(timeEntry.start)),
      hours: timeEntry.totalHours,
      time: this.parseTime(timeEntry.start, timeEntry.end),
      comments: timeEntry.comments,
      amount: timeEntry.totalHours * pay
    }
  }

  private parseDate(date: Date): string {
    return date.toLocaleDateString('en-ca', {
      month: 'short', day: 'numeric'
    });
  }

  private parseTime(start: string, end: string): string {
    const startTime = new Date(start)
      .toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      });
    const endTime = new Date(end)
      .toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      });
    return `${startTime} - ${endTime}`;
  }
}
