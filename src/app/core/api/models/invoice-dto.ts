/* tslint:disable */
import { TimeEntryDto } from './time-entry-dto';
import { VendorDto } from './vendor-dto';
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
  vendorDto?: null | VendorDto;
  vendorId?: string;
}
