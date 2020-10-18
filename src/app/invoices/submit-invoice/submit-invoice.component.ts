import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { InvoicesService } from '../../core/api/services';
import { TimeEntry } from '../../core/api/models';

export interface State {
  invoiceId: string;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './submit-invoice.component.html',
  styleUrls: ['./submit-invoice.component.scss'],
})
export class SubmitInvoiceComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private invoices: InvoicesService,
    private route: ActivatedRoute
  ) {}

  invoiceForm: FormGroup;

  get timeEntries() {
    return this.invoiceForm.get('timeEntries') as FormArray;
  }

  ngOnInit(): void {
    const id$ = this.route.params.pipe(map((p) => p.id as string));

    this.invoiceForm = this.builder.group({
      timeEntries: this.builder.array([]),
    });

    this.addTimeEntry();
  }

  addTimeEntry() {
    this.timeEntries.push(
      this.builder.group({
        date: [''],
        start: [''],
        end: [''],
        comments: [''],
      })
    );
  }

  removeTimeEntry(index: number) {
    this.timeEntries.removeAt(index);
  }

  submitInvoice() {
    const timeEntries = this.map(this.timeEntries);

    this.invoices
      .submitInvoice({
        body: {
          vendorId: '014d9f31-6a28-4f5f-abfa-9f5ab04f93cc',
          timeEntries: timeEntries,
        },
      })
      .subscribe();
  }

  map(timeEntries: FormArray): TimeEntry[] {
    return timeEntries.controls.map((entry: FormGroup) => {
      const dateString = moment(entry.get('date').value).format('YYYY-MM-DD');
      const start = `${dateString}T${entry.get('start').value}`;
      const end = `${dateString}T${entry.get('end').value}`;
      return {
        start: start,
        end: end,
        comments: entry.get('comments').value,
      } as TimeEntry;
    });
  }
}
