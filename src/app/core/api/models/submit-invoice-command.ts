/* tslint:disable */
import { TimeEntry } from './time-entry';
export interface SubmitInvoiceCommand {
  invoiceId?: string;
  timeEntries?: null | Array<TimeEntry>;
}
