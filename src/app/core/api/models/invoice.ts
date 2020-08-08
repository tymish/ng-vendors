/* tslint:disable */
import { TimeEntry } from './time-entry';
export interface Invoice {
  created?: string;
  id?: string;
  paid?: null | string;
  paidAmount?: number;
  paymentReference?: null | string;
  submitted?: null | string;
  timeEntries?: null | Array<TimeEntry>;
  totalAmount?: number;
  vendorId?: string;
}
