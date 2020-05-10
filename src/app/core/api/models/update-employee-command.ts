/* tslint:disable */
export interface UpdateEmployeeCommand {
  email: string;
  employeeNumber: number;
  familyName: string;
  givenName: string;
  hourlyPay?: number;
}
