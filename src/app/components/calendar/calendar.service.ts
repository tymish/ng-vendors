import { Injectable } from "@angular/core";

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export interface CalendarDay {
  date: Date;
  day: number;
  dayOfWeek: DayOfWeek;
  selected: boolean;
  hasMorning?: boolean;
  hasAfternoon?: boolean;
  hasEvening?: boolean;
}

@Injectable({providedIn: 'root'})
export class CalendarService {

  get today(): Date {
    return new Date();
  }

  get month(): string{
    return this.today.toLocaleDateString('default', { month: 'long'} );
  }

  buildCalendar(days: CalendarDay[]) {
    const clonedDays = [...days]; // prevent mutation of parent 'days'
    const weeks: CalendarDay[][] = [];

    while (clonedDays.length > 0) {
      const nextSunday = clonedDays.findIndex(d => d.dayOfWeek === DayOfWeek.Sunday);

      let week = nextSunday !== 0
        ? clonedDays.splice(0, nextSunday)
        : clonedDays.splice(nextSunday, 7);

      weeks.push(week);
    }

    return this.padFirstAndLastWeekWithEmptyDays(weeks);
  }

  map(date: Date): CalendarDay {
    return {
      date: date,
      day: date.getDate(),
      dayOfWeek: date.getDay(),
      selected: false
    }
  }

  calendarDays(month: number = this.today.getMonth()): CalendarDay[] {
    return this.dates(month).map(d => this.map(d));
  }

  dates(month: number): Date[] {
    const dates: Date[] = [];
    const day = new Date();
    day.setDate(1);
    
    while(day.getMonth() === month) {
      dates.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }

    return dates;
  }

  private padFirstAndLastWeekWithEmptyDays(weeks: CalendarDay[][]) {
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