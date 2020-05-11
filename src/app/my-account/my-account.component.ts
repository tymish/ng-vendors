import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  public user$: Observable<any>;
  public claims$: Observable<any>;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.auth.getUser$();
    this.claims$ = this.auth.getClaims$({});
  }

}
