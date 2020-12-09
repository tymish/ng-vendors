import { Component, OnInit } from '@angular/core';


enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

interface Day {
  date: Date;
  day: number;
  dayOfWeek: DayOfWeek;
  hasMorning?: boolean;
  hasAfternoon?: boolean;
  hasEvening?: boolean;
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  weeks: Day[][];

  constructor() { }

  ngOnInit(): void {
    const jsDays = this.getAllDaysInMonth();
    const days = this.jsDateToTymishDate(jsDays);
    this.weeks = this.jsDatesToWeeks(days);
  }

  isToday(day?: Day) {
    if (!day) return false;
    const today = new Date();
    return day.date.getDate() === today.getDate()
      && day.date.getFullYear() === today.getFullYear()
      && day.date.getMonth() === today.getMonth();
  }

  getAllDaysInMonth() {
    const dates: Date[] = [];
    const today = new Date();
    const month = today.getMonth();
    today.setDate(1);
    
    while(today.getMonth() === month) {
      dates.push(new Date(today));
      today.setDate(today.getDate() + 1);
    }

    return dates;
  }

  jsDateToTymishDate(dates: Date[]): Day[] {
    const days: Day[] = dates.map(d => {
      return {
        date: d,
        day: d.getDate(),
        dayOfWeek: d.getDay()
      }
    });

    return days;
  }

  jsDatesToWeeks(dates: Day[]) {
    const weeks: Day[][] = [];

    while (dates.length > 0) {
      const nextSunday = dates.findIndex(d => d.dayOfWeek === DayOfWeek.Sunday);

      let week = nextSunday !== 0
        ? dates.splice(0, nextSunday)
        : dates.splice(nextSunday, 7);

      weeks.push(week);
    }

    return this.padFirstAndLastWeekWithEmptyDays(weeks);
  }

  padFirstAndLastWeekWithEmptyDays(weeks: Day[][]) {
    if (weeks.length <= 1) return; // this should be impossible

    const missingDaysInFirstWeek = 7 - weeks[0].length;
    for (let i = 0; i < missingDaysInFirstWeek; i++) {
      weeks[0].unshift(null);
    }

    const missingDaysInLastWeek = 7 - weeks[weeks.length-1].length;
    for (let i = 0; i < missingDaysInLastWeek; i++) {
      weeks[weeks.length-1].push(null);
    }

    return weeks;
  }
}