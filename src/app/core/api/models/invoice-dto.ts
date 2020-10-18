/* tslint:disable */
import { TimeEntryDto } from './time-entry-dto';
export interface InvoiceDto {
  created?: string;
  id?: string;
  paid?: null | string;
  paidAmount?: number;
  paymentReference?: null | string;
  submitted?: null | string;
  timeEntryDtos?: null | Array<TimeEntryDto>;
  totalAmount?: number;
  totalHours?: number;
  vendorId?: string;
}
