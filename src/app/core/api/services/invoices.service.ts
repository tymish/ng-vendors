/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Invoice } from '../models/invoice';
import { InvoiceDto } from '../models/invoice-dto';
import { PayInvoiceCommand } from '../models/pay-invoice-command';
import { SubmitInvoiceCommand } from '../models/submit-invoice-command';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getInvoiceById
   */
  static readonly GetInvoiceByIdPath = '/invoices/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceById$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<InvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.GetInvoiceByIdPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInvoiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceById(params: {
    id: string;

  }): Observable<InvoiceDto> {

    return this.getInvoiceById$Response(params).pipe(
      map((r: StrictHttpResponse<InvoiceDto>) => r.body as InvoiceDto)
    );
  }

  /**
   * Path part for operation listInvoices
   */
  static readonly ListInvoicesPath = '/invoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listInvoices()` instead.
   *
   * This method doesn't expect any request body.
   */
  listInvoices$Response(params?: {
    status?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ListInvoicesPath, 'get');
    if (params) {

      rb.query('status', params.status, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listInvoices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listInvoices(params?: {
    status?: string;

  }): Observable<void> {

    return this.listInvoices$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation submitInvoice
   */
  static readonly SubmitInvoicePath = '/invoices/submit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitInvoice()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  submitInvoice$Response(params?: {
      body?: SubmitInvoiceCommand
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.SubmitInvoicePath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `submitInvoice$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  submitInvoice(params?: {
      body?: SubmitInvoiceCommand
  }): Observable<Invoice> {

    return this.submitInvoice$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

  /**
   * Path part for operation payInvoice
   */
  static readonly PayInvoicePath = '/invoices/pay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `payInvoice()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  payInvoice$Response(params?: {
      body?: PayInvoiceCommand
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.PayInvoicePath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Invoice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `payInvoice$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  payInvoice(params?: {
      body?: PayInvoiceCommand
  }): Observable<Invoice> {

    return this.payInvoice$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

}
