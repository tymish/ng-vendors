import { Component, OnInit } from '@angular/core';

export interface Time {
  hour: number;
  minute: number;
  second: number;
}

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  from: Time;
  to: Time;
  constructor() { }

  ngOnInit(): void {
  }

}
