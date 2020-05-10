import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logged-out',
  template: `<h2>You've been logged out.</h2>`,
  styles: [
    `
      h2 {
        text-align: center;
      }
    `
  ]
})
export class LoggedOutComponent implements OnInit {
  ngOnInit() {}
}
