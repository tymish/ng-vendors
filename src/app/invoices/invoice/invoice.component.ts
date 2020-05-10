import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import * as moment from 'moment';
import {InvoicesService} from '../../core/api/services';
import {TimeEntry, Employee} from '../../core/api/models';
import {Observable, of, forkJoin} from 'rxjs';

export interface State {
  invoiceId: string;
  employee: Employee;
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
  public state$: Observable<State>;
  public invoiceForm: FormGroup;

  ngOnInit(): void {
    const id$ = this.route.params.pipe(map((p) => p.id as string));

    this.state$ = id$.pipe(
      switchMap((id) =>
        forkJoin(of(id), this.invoices.getEmployeeByInvoiceId({id: id}))
      ),
      map((result) => ({invoiceId: result[0], employee: result[1]} as State))
    );

    this.invoiceForm = this.builder.group({
      timeEntries: this.builder.array([
        this.builder.group({
          date: this.builder.control(''),
          start: this.builder.control(''),
          end: this.builder.control('')
        })
      ])
    });
  }

  get timeEntries() {
    return this.invoiceForm.get('timeEntries') as FormArray;
  }

  addTimeEntry() {
    this.timeEntries.push(
      this.builder.group({
        date: this.builder.control(''),
        start: this.builder.control(''),
        end: this.builder.control('')
      })
    );
  }

  removeTimeEntry(index: number) {
    this.timeEntries.removeAt(index);
  }

  submitInvoice(id: string) {
    const timeEntries = this.map(this.timeEntries);
    console.log(`${id}, ${timeEntries}`);

    this.invoices
      .submitInvoice({
        body: {
          invoiceId: id,
          timeEntries: timeEntries
        }
      })
      .subscribe();
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
