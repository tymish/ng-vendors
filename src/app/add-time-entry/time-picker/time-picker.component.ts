import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Moment } from 'moment';

export interface Time {
  hour: number;
  minute: number;
  second: number;
}

export interface Data {
  selectedDates: Moment[];
}

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Data) { }
  from: Time;
  to: Time;

  ngOnInit(): void {}

  get selectedDates() {
    return this.data.selectedDates;
  }

  get year(): string {
    return this.selectedDates[this.selectedDates.length -1].format('yyyy');
  }

  get monthRange(): string {
    const dates = this.selectedDates;
    if (!this.selectedDates || this.selectedDates.length === 0) return '';

    const last = dates[0].format('MMMM');

    const first = dates[dates.length - 1].format('MMMM');
    if (first === last) return last;

    return `${last} - ${first}`;
  }
}
