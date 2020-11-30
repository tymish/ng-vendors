import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit {
  daysSelected: Moment[] = [];
  today = new Date();

  constructor() {}

  ngOnInit(): void {}

  isSelectedClass = (date: Moment) => {
    return this.daysSelected
      .find(selectedDay => selectedDay.isSame(date, 'day'))
        ? 'selected'
        : null;
  }

  select(date: Moment, calendar:any) {
    const index = this.daysSelected.findIndex(d => d.isSame(date, 'day'));
    if (index < 0) this.daysSelected.push(date);
    else this.daysSelected.splice(index, 1);
    calendar.updateTodaysDate();
  }
}
