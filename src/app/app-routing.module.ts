import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { SubmitInvoiceComponent } from './invoices/submit-invoice/submit-invoice.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register/:id',
    component: RegisterComponent,
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'invoices/submit',
    component: SubmitInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
