/* tslint:disable */
import { Invoice } from './invoice';
export interface Employee {
  email?: null | string;
  employeeNumber?: number;
  familyName?: null | string;
  givenName?: null | string;
  hourlyPay?: number;
  id?: string;
  invoices?: null | Array<Invoice>;
}
