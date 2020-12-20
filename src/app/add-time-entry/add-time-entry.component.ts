import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Day } from '../components/calendar/calendar.service';
import { TimePickerComponent } from './time-picker/time-picker.component';

@Component({
  selector: 'app-add-time-entry',
  templateUrl: './add-time-entry.component.html',
  styleUrls: ['./add-time-entry.component.scss'],
})
export class AddTimeEntryComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openTimePicker(selected: Day[]) {
    const ref = this.bottomSheet.open(TimePickerComponent, {
      data: { selectedDates: selected },
    });
  }
}
