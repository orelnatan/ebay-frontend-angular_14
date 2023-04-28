import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@ebay/env/environment';
import { IFamily } from '@ebay/home/models';

@Injectable()
export class FamiliesService {
    families: Record<number, IFamily[]> = {};

    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(categoryId: number): Observable<IFamily[]> {
        let httpParams: HttpParams = new HttpParams();
        httpParams = httpParams.append("categoryId", categoryId);
        
        return this.families[categoryId] ? observableOf(this.families[categoryId]) : this.httpClient.get<IFamily[]>(environment.apis.home.families.byCategoryId, {
            params: httpParams
        }).pipe(
            map((families: IFamily[]): IFamily[] => {
                this.families[categoryId] = families;
                
                return families;
            })
        );
    }

    getSingleEntity(categoryId: number, familyId: number): Observable<IFamily> {
        return this.families[categoryId] ? observableOf(this.families[categoryId].find(family => familyId == family.id)!) :
        this.fetchAll(categoryId)
        .pipe(
            map((families: IFamily[]): IFamily => {
                this.families[categoryId] = families;
                
                return families.find(family => familyId == family.id)!;
            })
        );
    }
}