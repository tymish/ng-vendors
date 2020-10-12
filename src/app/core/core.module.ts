import { NgModule } from '@angular/core';

import { MatModule } from '../mat.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { LoggedOutComponent } from './auth/logged-out.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoggedOutComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MatModule, HttpClientModule],
  exports: [SidenavComponent, ToolbarComponent],
})
export class CoreModule {}
