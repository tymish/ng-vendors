import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoices/invoice/invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SubmitInvoiceComponent } from './invoices/submit-invoice/submit-invoice.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-a-time',
    pathMatch: 'full'
  },
  {
    path: 'add-a-time',
    loadChildren: () =>
      import('./add-time-entry/add-time-entry.module')
      .then(m => m.AddTimeEntryModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register/:id',
    component: RegisterComponent,
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'invoices/submit',
    component: SubmitInvoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'invoices/:id',
    component: InvoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    component: MyAccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
