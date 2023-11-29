import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';  

import { ImgBBService } from '@ebay/shared/services';
import { environment } from '@ebay/env/environment';

import { ILogin, IRegistration, IUser } from '../models';

import * as moment from 'moment';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly imgBBService: ImgBBService
  ) {}

  login(login: ILogin): Observable<IUser> {
    return this.httpClient.post<IUser>(environment.apis.auth.login, {
      ... login
    })
  }

  register(registration: IRegistration): Observable<IRegistration> {
    return this.imgBBService.upload(registration.avatar).pipe(
      switchMap((url: string) => {
        return this.httpClient.post<IRegistration>(environment.apis.auth.register, {
          ... registration,
          registered: moment().format('YYYY-MM-DD'),
          avatar: url
        })
      })
    )
  }
}
