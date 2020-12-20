import { Component, OnInit } from '@angular/core';
import { CalendarService, Day } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  weeks: Day[][];

  constructor(private calendarService: CalendarService) {}

  get selectedDays(): Day[] {
    return this.weeks.flat(1).filter((day) => day?.selected);
  }

  ngOnInit(): void {
    this.weeks = this.calendarService.thisMonth;
  }

  isToday(day?: Day) {
    if (!day) return false;
    const today = new Date();
    return (
      day.date.getDate() === today.getDate() &&
      day.date.getFullYear() === today.getFullYear() &&
      day.date.getMonth() === today.getMonth()
    );
  }

  selectDate(day: Day) {
    if (!day) return;
    day.selected = !day.selected;
    // day.hasAfternoon = true;
    // day.hasEvening = true;
    // day.hasMorning = true;
  }

  isSelected(day: Day) {
    return day ? day.selected : false;
  }
}
