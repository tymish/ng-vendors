/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Employee } from '../models/employee';
import { EmployeeInvoiceAggregateDto } from '../models/employee-invoice-aggregate-dto';
import { Invoice } from '../models/invoice';
import { MonthAggregateDto } from '../models/month-aggregate-dto';
import { PayInvoiceCommand } from '../models/pay-invoice-command';
import { SendInvoicesCommand } from '../models/send-invoices-command';
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

  }): Observable<StrictHttpResponse<Invoice>> {

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
        return r as StrictHttpResponse<Invoice>;
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

  }): Observable<Invoice> {

    return this.getInvoiceById$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

  /**
   * Path part for operation getEmployeeByInvoiceId
   */
  static readonly GetEmployeeByInvoiceIdPath = '/invoices/{id}/employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeByInvoiceId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeByInvoiceId$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.GetEmployeeByInvoiceIdPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEmployeeByInvoiceId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeByInvoiceId(params: {
    id: string;

  }): Observable<Employee> {

    return this.getEmployeeByInvoiceId$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation getEmployeeInvoiceAggregates
   */
  static readonly GetEmployeeInvoiceAggregatesPath = '/invoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeInvoiceAggregates()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeInvoiceAggregates$Response(params?: {
    month?: string;

  }): Observable<StrictHttpResponse<Array<EmployeeInvoiceAggregateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.GetEmployeeInvoiceAggregatesPath, 'get');
    if (params) {

      rb.query('month', params.month, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmployeeInvoiceAggregateDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEmployeeInvoiceAggregates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeInvoiceAggregates(params?: {
    month?: string;

  }): Observable<Array<EmployeeInvoiceAggregateDto>> {

    return this.getEmployeeInvoiceAggregates$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EmployeeInvoiceAggregateDto>>) => r.body as Array<EmployeeInvoiceAggregateDto>)
    );
  }

  /**
   * Path part for operation getMonthAggregate
   */
  static readonly GetMonthAggregatePath = '/invoices/summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthAggregate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthAggregate$Response(params?: {
    year?: number;

  }): Observable<StrictHttpResponse<Array<MonthAggregateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.GetMonthAggregatePath, 'get');
    if (params) {

      rb.query('year', params.year, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MonthAggregateDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMonthAggregate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthAggregate(params?: {
    year?: number;

  }): Observable<Array<MonthAggregateDto>> {

    return this.getMonthAggregate$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MonthAggregateDto>>) => r.body as Array<MonthAggregateDto>)
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

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.SubmitInvoicePath, 'put');
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

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.PayInvoicePath, 'put');
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

  /**
   * Path part for operation sendInvoices
   */
  static readonly SendInvoicesPath = '/invoices/sent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendInvoices()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sendInvoices$Response(params?: {
      body?: SendInvoicesCommand
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.SendInvoicesPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `sendInvoices$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sendInvoices(params?: {
      body?: SendInvoicesCommand
  }): Observable<void> {

    return this.sendInvoices$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sendInvoice
   */
  static readonly SendInvoicePath = '/invoices/{id}/sent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendInvoice$Response(params: {
    invoiceId: string;
    id: string;

  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.SendInvoicePath, 'put');
    if (params) {

      rb.path('invoiceId', params.invoiceId, {});
      rb.path('id', params.id, {});

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
   * To access the full response (for headers, for example), `sendInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendInvoice(params: {
    invoiceId: string;
    id: string;

  }): Observable<Invoice> {

    return this.sendInvoice$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body as Invoice)
    );
  }

}
