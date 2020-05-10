/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateEmployeeCommand } from '../models/create-employee-command';
import { DeleteEmployeeCommand } from '../models/delete-employee-command';
import { Employee } from '../models/employee';
import { UpdateEmployeeCommand } from '../models/update-employee-command';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getEmployeeList
   */
  static readonly GetEmployeeListPath = '/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeList$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Employee>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.GetEmployeeListPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Employee>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEmployeeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeList(params?: {

  }): Observable<Array<Employee>> {

    return this.getEmployeeList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Employee>>) => r.body as Array<Employee>)
    );
  }

  /**
   * Path part for operation updateEmployee
   */
  static readonly UpdateEmployeePath = '/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEmployee()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateEmployee$Response(params?: {
      body?: UpdateEmployeeCommand
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.UpdateEmployeePath, 'put');
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
   * To access the full response (for headers, for example), `updateEmployee$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateEmployee(params?: {
      body?: UpdateEmployeeCommand
  }): Observable<void> {

    return this.updateEmployee$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createEmployee
   */
  static readonly CreateEmployeePath = '/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEmployee()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createEmployee$Response(params?: {
      body?: CreateEmployeeCommand
  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.CreateEmployeePath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `createEmployee$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createEmployee(params?: {
      body?: CreateEmployeeCommand
  }): Observable<Employee> {

    return this.createEmployee$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation deleteEmployee
   */
  static readonly DeleteEmployeePath = '/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEmployee()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteEmployee$Response(params?: {
      body?: DeleteEmployeeCommand
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.DeleteEmployeePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteEmployee$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteEmployee(params?: {
      body?: DeleteEmployeeCommand
  }): Observable<void> {

    return this.deleteEmployee$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getEmployeeById
   */
  static readonly GetEmployeeByIdPath = '/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeById$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.GetEmployeeByIdPath, 'get');
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
   * To access the full response (for headers, for example), `getEmployeeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeById(params: {
    id: string;

  }): Observable<Employee> {

    return this.getEmployeeById$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation getEmployeeByNumber
   */
  static readonly GetEmployeeByNumberPath = '/employees/{number}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeByNumber()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeByNumber$Response(params: {
    number: number;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.GetEmployeeByNumberPath, 'get');
    if (params) {

      rb.path('number', params.number, {});

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
   * To access the full response (for headers, for example), `getEmployeeByNumber$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeByNumber(params: {
    number: number;

  }): Observable<Employee> {

    return this.getEmployeeByNumber$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation getInvoicesForEmployee
   */
  static readonly GetInvoicesForEmployeePath = '/employees/{number}/invoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoicesForEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoicesForEmployee$Response(params: {
    number: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.GetInvoicesForEmployeePath, 'get');
    if (params) {

      rb.path('number', params.number, {});

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
   * To access the full response (for headers, for example), `getInvoicesForEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoicesForEmployee(params: {
    number: number;

  }): Observable<void> {

    return this.getInvoicesForEmployee$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
