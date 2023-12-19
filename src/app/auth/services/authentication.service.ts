import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import { environment } from '@ebay/env/environment';

import { ILogin, IRegistration, IUser } from '../models';

import * as moment from 'moment';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  login(login: ILogin): Observable<IUser> {
    return this.httpClient.post<IUser>(environment.apis.auth.login, {
      ... login
    })
  }

  register(registration: IRegistration): Observable<IRegistration> {
    return this.httpClient.post<IRegistration>(environment.apis.auth.register, {
      ... registration,
      registered: moment().format('YYYY-MM-DD'),
    })
  }
}
