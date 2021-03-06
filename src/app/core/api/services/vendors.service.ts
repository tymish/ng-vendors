/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddVendorCommand } from '../models/add-vendor-command';
import { Invoice } from '../models/invoice';
import { InvoiceDto } from '../models/invoice-dto';
import { LoginVendorCommand } from '../models/login-vendor-command';
import { RegisterVendorCommand } from '../models/register-vendor-command';
import { Vendor } from '../models/vendor';
import { VendorDto } from '../models/vendor-dto';

@Injectable({
  providedIn: 'root',
})
export class VendorsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getVendor
   */
  static readonly GetVendorPath = '/vendors/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVendor()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVendor$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<VendorDto>> {

    const rb = new RequestBuilder(this.rootUrl, VendorsService.GetVendorPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VendorDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVendor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVendor(params: {
    id: string;

  }): Observable<VendorDto> {

    return this.getVendor$Response(params).pipe(
      map((r: StrictHttpResponse<VendorDto>) => r.body as VendorDto)
    );
  }

  /**
   * Path part for operation listVendors
   */
  static readonly ListVendorsPath = '/vendors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listVendors()` instead.
   *
   * This method doesn't expect any request body.
   */
  listVendors$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Invoice>>> {

    const rb = new RequestBuilder(this.rootUrl, VendorsService.ListVendorsPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Invoice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listVendors$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listVendors(params?: {

  }): Observable<Array<Invoice>> {

    return this.listVendors$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Invoice>>) => r.body as Array<Invoice>)
    );
  }

  /**
   * Path part for operation addVendor
   */
  static readonly AddVendorPath = '/vendors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addVendor()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addVendor$Response(params?: {
      body?: AddVendorCommand
  }): Observable<StrictHttpResponse<Vendor>> {

    const rb = new RequestBuilder(this.rootUrl, VendorsService.AddVendorPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Vendor>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addVendor$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addVendor(params?: {
      body?: AddVendorCommand
  }): Observable<Vendor> {

    return this.addVendor$Response(params).pipe(
      map((r: StrictHttpResponse<Vendor>) => r.body as Vendor)
    );
  }

  /**
   * Path part for operation listVendorInvoices
   */
  static readonly ListVendorInvoicesPath = '/vendors/{id}/invoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listVendorInvoices()` instead.
   *
   * This method doesn't expect any request body.
   */
  listVendorInvoices$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Array<InvoiceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VendorsService.ListVendorInvoicesPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InvoiceDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listVendorInvoices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listVendorInvoices(params: {
    id: string;

  }): Observable<Array<InvoiceDto>> {

    return this.listVendorInvoices$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InvoiceDto>>) => r.body as Array<InvoiceDto>)
    );
  }

  /**
   * Path part for operation registerVendor
   */
  static readonly RegisterVendorPath = '/vendors/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerVendor()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerVendor$Response(params?: {
      body?: RegisterVendorCommand
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, VendorsService.RegisterVendorPath, 'post');
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
   * To access the full response (for headers, for example), `registerVendor$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerVendor(params?: {
      body?: RegisterVendorCommand
  }): Observable<void> {

    return this.registerVendor$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation loginVendor
   */
  static readonly LoginVendorPath = '/vendors/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginVendor()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginVendor$Response(params?: {
      body?: LoginVendorCommand
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, VendorsService.LoginVendorPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginVendor$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginVendor(params?: {
      body?: LoginVendorCommand
  }): Observable<string> {

    return this.loginVendor$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
