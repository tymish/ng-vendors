import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { AddTimeEntryComponent } from './add-time-entry.component';
import { MatModule } from '../mat.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AddTimeEntryComponent
  }
]

@NgModule({
  declarations: [AddTimeEntryComponent, TimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class AddTimeEntryModule { }
