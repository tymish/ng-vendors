import {Component, OnInit, ViewChild} from '@angular/core';
import {SidenavComponent} from './core/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['div.mobile { max-width: 400px; margin: auto;}']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: SidenavComponent;

  ngOnInit() {}

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
