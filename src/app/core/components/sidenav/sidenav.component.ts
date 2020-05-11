import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  sideNavOpened = false;
  sideNavMode: 'side' | 'over' = 'over';

  constructor(public auth: AuthService) {}

  ngOnInit() {
    if (screen.width > 975) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
    }
  }

  toggle() {
    this.sidenav.toggle();
  }
}
