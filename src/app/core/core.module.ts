import { NgModule } from '@angular/core';

import { MatModule } from '../mat.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { RegisterComponent } from './auth/register.component';
import { LoginComponent } from './auth/login.component';
import { LoggedOutComponent } from './auth/logged-out.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LoggedOutComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MatModule],
  exports: [SidenavComponent, ToolbarComponent],
})
export class CoreModule {}
