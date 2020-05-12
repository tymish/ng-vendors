import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Auth0 from 'auth0-js';

/** Angular service wrapper for auth0.js
 * https://auth0.github.io/auth0.js/index.html
 *
 * This is different than auth.service.ts.
 * We use this because `auth0-spa-js` package is missing functionality.
 */
@Injectable({ providedIn: 'root' })
export class Auth0JsService {
// HTTP PATCH /userinfo
// update their pay_rate
// update name, and email
}
