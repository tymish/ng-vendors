import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { VendorsService } from '../api/services';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

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

  constructor(
    private readonly vendors: VendorsService,
    private readonly router: Router) {
      const jwt = this.readSessionToken();
      if (jwt) {
        this.jwtPayloadSubject$.next(jwt_decode(jwt) as JwtPayload);
        this.loggedIn = true;
      }
  }

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
          this.saveSessionToken(jwt);
        })
      );
  }

  logout() {
    this.jwtPayloadSubject$.next(null);
    this.loggedIn = false;
    this.deleteSessionToken();
    this.router.navigate(['/login']);
  }

  readSessionToken() {
    return sessionStorage.getItem('auth-token');
  }

  saveSessionToken(jwt: string) {
    sessionStorage.setItem('auth-token', jwt);
  }

  deleteSessionToken() {
    sessionStorage.removeItem('auth-token');
  }
}
