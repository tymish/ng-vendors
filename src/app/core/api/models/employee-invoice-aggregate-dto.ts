/* tslint:disable */
import { Employee } from './employee';
export interface EmployeeInvoiceAggregateDto {
  amountOwed?: number;
  employee?: null | Employee;
  invoiceId?: string;
  paid?: null | string;
  sent?: null | string;
  submitted?: null | string;
}
