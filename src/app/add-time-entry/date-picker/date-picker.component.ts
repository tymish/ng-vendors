import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit {
  selectedDates: Moment[] = [];
  @Output() datesSelected: EventEmitter<Moment[]> = new EventEmitter();
  today = new Date();

  constructor() {}

  ngOnInit(): void {}

  isSelectedClass = (date: Moment) => {
    return this.selectedDates
      .find(selectedDay => selectedDay.isSame(date, 'day'))
        ? 'selected'
        : null;
  }

  allowPastDates = (date: Moment): boolean => {
    return date.isBefore(moment());
  }

  select(date: Moment, calendar:any) {
    const index = this.selectedDates.findIndex(d => d.isSame(date, 'day'));
    if (index < 0) this.selectedDates.push(date);
    else this.selectedDates.splice(index, 1);
    calendar.updateTodaysDate();
    this.datesSelected.emit(this.selectedDates);
  }
}
