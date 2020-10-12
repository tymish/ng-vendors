import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {InvoicesService} from '../../core/api/services';
import {TimeEntry} from '../../core/api/models';

export interface State {
  invoiceId: string;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private invoices: InvoicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id$ = this.route.params.pipe(map((p) => p.id as string));
  }

  map(timeEntries: FormArray): TimeEntry[] {
    return timeEntries.controls.map((entry) => {
      const dateString = moment(entry.get('date').value).format('YYYY-MM-DD');
      const start = `${dateString}T${entry.get('start').value}`;
      const end = `${dateString}T${entry.get('end').value}`;
      return {
        start: start,
        end: end
      } as TimeEntry;
    });
  }
}
