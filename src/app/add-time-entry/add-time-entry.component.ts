import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Moment } from 'moment';
import { TimePickerComponent } from './time-picker/time-picker.component';

@Component({
  selector: 'app-add-time-entry',
  templateUrl: './add-time-entry.component.html',
  styleUrls: ['./add-time-entry.component.scss'],
})
export class AddTimeEntryComponent implements OnInit {
  selectedDates: Moment[] = [];

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  updateDates(selectedDates: Moment[]) {
    this.selectedDates = selectedDates.sort((a,b) => a.valueOf() - b.valueOf());
  }

  openTimePicker() {
    const ref = this.bottomSheet.open(TimePickerComponent, {
      data: { selectedDates: this.selectedDates },
    });
  }
}
