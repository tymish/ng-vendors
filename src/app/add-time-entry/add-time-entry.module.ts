import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { AddTimeEntryComponent } from './add-time-entry.component';
import { MatModule } from '../mat.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddTimeEntryComponent
  }
]

@NgModule({
  declarations: [AddTimeEntryComponent, DatePickerComponent, TimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatModule,
    RouterModule.forChild(routes)
  ]
})
export class AddTimeEntryModule { }
