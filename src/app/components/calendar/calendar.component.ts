import { Component, Input, OnInit } from '@angular/core';
import { CalendarService, CalendarDay } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() days: CalendarDay[];
  calendar: CalendarDay[][];
  month = this.calendarService.month;

  constructor(private calendarService: CalendarService) {}

  get selectedDays(): CalendarDay[] {
    return this.days.filter((day) => day?.selected);
  }

  ngOnInit(): void {
    console.log(this.days);
    this.calendar = this.calendarService.buildCalendar(this.days);
    console.log(this.days);
  }

  isToday(day?: CalendarDay) {
    if (!day) return false;
    const today = new Date();
    return (
      day.date.getDate() === today.getDate() &&
      day.date.getFullYear() === today.getFullYear() &&
      day.date.getMonth() === today.getMonth()
    );
  }

  selectDate(day: CalendarDay) {
    if (!day) return;
    day.selected = !day.selected;
  }

  isSelected(day: CalendarDay) {
    return day ? day.selected : false;
  }
}
