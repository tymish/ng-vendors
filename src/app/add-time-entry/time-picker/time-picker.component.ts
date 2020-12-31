import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CalendarDay } from 'src/app/components/calendar/calendar.service';
import { Time, TimeRange } from '../add-time-entry.component';

export interface Data {
  selectedDates: CalendarDay[];
}

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Data,
    private _bottomSheetRef: MatBottomSheetRef<TimePickerComponent>
  ) {}

  from: Time;
  to: Time;

  ngOnInit(): void {}

  get selectedDates() {
    return this.data.selectedDates;
  }

  get year(): string {
    return this.selectedDates[this.selectedDates.length - 1]
      .date
      .getFullYear()
      .toString();
  }

  get monthRange(): string {
    const dates = this.selectedDates;
    if (!this.selectedDates || this.selectedDates.length === 0) return '';

    const last = dates[0].date.toLocaleString('default', {month: 'long'});

    const first = dates[dates.length - 1].date.toLocaleString('default', {month: 'long'});
    if (first === last) return last;

    return `${last} - ${first}`;
  }

  save() {
    const timeRange = {from: this.from, to: this.to};
    this._bottomSheetRef.dismiss(timeRange);
  }
}
