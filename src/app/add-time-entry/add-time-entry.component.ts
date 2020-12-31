import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CalendarDay, CalendarService } from '../components/calendar/calendar.service';
import { TimePickerComponent } from './time-picker/time-picker.component';

export interface Time {
  hour: number;
  minute: number;
}

export interface TimeRange {
  from: Time,
  to: Time
}

@Component({
  selector: 'app-add-time-entry',
  templateUrl: './add-time-entry.component.html',
  styleUrls: ['./add-time-entry.component.scss'],
})
export class AddTimeEntryComponent implements OnInit {
  days: CalendarDay[];
  selectedDays: CalendarDay[];

  constructor(
    private bottomSheet: MatBottomSheet,
    private calendarService: CalendarService
  ) {}

  ngOnInit(): void {
    this.days = this.calendarService.calendarDays();
  }

  openTimePicker(selected: CalendarDay[]) {
    const ref = this.bottomSheet.open(TimePickerComponent, {
      data: { selectedDates: selected },
    });
    //ref.afterDismissed().subscribe(x => );
  }
}
