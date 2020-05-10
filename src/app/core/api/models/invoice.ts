/* tslint:disable */
import { Employee } from './employee';
import { TimeEntry } from './time-entry';
export interface Invoice {
  employee?: null | Employee;
  employeeId?: string;
  id?: string;
  paid?: null | string;
  payPeriod?: string;
  sent?: null | string;
  submitted?: null | string;
  timeEntries?: null | Array<TimeEntry>;
}
