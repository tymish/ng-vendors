import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat.module';
import { CoreModule } from './core/core.module';
import { SubmitInvoiceComponent } from './invoices/submit-invoice/submit-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ApiModule } from './core/api/api.module';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoices/invoice/invoice.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { TimeEntriesComponent } from './time-entries/time-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    HomeComponent,
    SubmitInvoiceComponent,
    RegisterComponent,
    LoginComponent,
    InvoiceComponent,
    MyAccountComponent,
    TimeEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    MatModule,
    ApiModule.forRoot({rootUrl: environment.api})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
