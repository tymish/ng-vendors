import { Injectable } from '@angular/core';
import createAuth0Client, {
  GetTokenSilentlyOptions,
  GetUserOptions,
  getIdTokenClaimsOptions,
} from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import {
  from,
  of,
  Observable,
  BehaviorSubject,
  combineLatest,
  throwError,
} from 'rxjs';
import { tap, catchError, concatMap, shareReplay, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Auth0JsService } from './auth0-js.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  auth0Client$ = (from(
    createAuth0Client({
      domain: environment.auth.domain,
      client_id: environment.auth.client_id,
      redirect_uri: `${window.location.origin}`,
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1),
    catchError((err) => throwError(err))
  );

  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap((res) => (this.loggedIn = res))
  );

  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );

  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();

  loggedIn: boolean = null;

  constructor(private router: Router) {
    this.localAuthSetup();
    this.handleAuthCallback();
  }

  getUser$(options?: GetUserOptions): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap((user) => this.userProfileSubject$.next(user))
    );
  }

  getAuthToken$(options?: GetTokenSilentlyOptions): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getTokenSilently(options)))
    );
  }

  getIdTokenClaims$(options?: getIdTokenClaimsOptions): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getIdTokenClaims(options)))
    );
  }

  private localAuthSetup() {
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          return this.getUser$();
        }
        return of(loggedIn);
      })
    );
    checkAuth$.subscribe();
  }

  login(redirectPath: string = '/') {
    this.auth0Client$.subscribe((client: Auth0Client) => {
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath },
      });
    });
  }

  private handleAuthCallback() {
    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string;
      const authComplete$ = this.handleRedirectCallback$.pipe(
        tap((cbRes) => {
          targetRoute =
            cbRes.appState && cbRes.appState.target
              ? cbRes.appState.target
              : '/';
        }),
        concatMap(() => {
          return combineLatest([this.getUser$(), this.isAuthenticated$]);
        })
      );

      authComplete$.subscribe(([user, loggedIn]) => {
        this.router.navigate([targetRoute]);
      });
    }
  }

  logout() {
    this.auth0Client$.subscribe((client: Auth0Client) => {
      client.logout({
        client_id: environment.auth.client_id,
        returnTo: `${window.location.origin}`,
      });
    });
  }
}
