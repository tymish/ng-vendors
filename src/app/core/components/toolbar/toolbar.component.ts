import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggled = new EventEmitter<any>();

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }

  toggleSidenav(event: Event) {
    this.sidenavToggled.emit(event);
  }
}
