import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Moment } from 'moment';
import { TimePickerComponent } from './time-picker/time-picker.component';

@Component({
  selector: 'app-add-time-entry',
  templateUrl: './add-time-entry.component.html',
  styleUrls: ['./add-time-entry.component.scss']
})
export class AddTimeEntryComponent implements OnInit {
  selectedDates: Moment[] = [];

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  updateDates(selectedDates: Moment[]) {
    this.selectedDates = selectedDates;
    console.log(selectedDates);
  }

  openTimePicker() {
    const ref = this.bottomSheet.open(TimePickerComponent);
    ref.afterDismissed().subscribe(() => {
      console.log(ref.instance.to);
    })
  }
}
