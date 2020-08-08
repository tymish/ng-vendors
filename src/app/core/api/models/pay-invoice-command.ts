/* tslint:disable */
export interface PayInvoiceCommand {
  invoiceId?: string;
  paymentAmount: number;
  paymentReference: string;
}
