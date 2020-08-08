/* tslint:disable */
import { TimeEntry } from './time-entry';
export interface SubmitInvoiceCommand {
  timeEntries?: null | Array<TimeEntry>;
  vendorId?: string;
}
