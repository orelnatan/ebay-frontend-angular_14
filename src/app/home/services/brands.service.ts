import { Injectable }  from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';  

import { environment } from '@ebay/env/environment';

import { IBrand } from '../models';

@Injectable()
export class BrandsService {
    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(): Observable<IBrand[]> {
        return this.httpClient.get<IBrand[]>(environment.apis.home.brands);
    }
}