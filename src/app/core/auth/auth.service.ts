import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { VendorsService } from '../api/services';
import jwt_decode from 'jwt-decode';

interface JwtPayload {
  sub: string;
  email: string;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}

interface User {
  vendorId: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private jwtPayloadSubject$ = new BehaviorSubject<JwtPayload>(null);

  constructor(private readonly vendors: VendorsService) {}

  loggedIn = false;

  /** Use for http requests only */
  token$ = this.jwtPayloadSubject$.asObservable();

  /** User that is logged in */
  user$: Observable<User> = this.jwtPayloadSubject$.pipe(
    map((payload) => ({ email: payload.email, vendorId: payload.sub } as User))
  );

  loggedIn$(): Observable<boolean> {
    return this.jwtPayloadSubject$.pipe(
      map((payload) => payload && payload.exp && payload.exp < Date.now())
    );
  }

  refreshToken() {
    // Send post request to server with current JWT
    // Update behavior subject with refreshed JWT
  }

  login$(email: string, password: string) {
    return this.vendors
      .loginVendor({ body: { email: email, password: password } })
      .pipe(
        tap((jwt) => {
          const payload = jwt_decode(jwt) as JwtPayload;
          this.jwtPayloadSubject$.next(payload);
          this.loggedIn = true;
        })
      );
  }

  logout() {
    this.jwtPayloadSubject$.next(null);
    this.loggedIn = false;
  }
}
