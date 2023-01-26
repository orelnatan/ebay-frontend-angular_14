import { Injectable, Type, }  from '@angular/core';
import { throwError, } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';  
import { map, catchError, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ILogin, IUser } from '../models';

@Injectable()
export class AuthenticationService {
    constructor(
        private httpClient: HttpClient,
    ) {}

    login(login: ILogin): Observable<IUser | HttpErrorResponse> {
        return this.httpClient.post<IUser>(environment.apis.auth.login, {
            ... login
        }).pipe(
            catchError((error: HttpErrorResponse): Observable<HttpErrorResponse> => {
                return throwError(() => error);
            })
        );
    }

}
