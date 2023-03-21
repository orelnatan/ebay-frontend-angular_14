import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@ebay/env/environment';
import { ICategory } from '@ebay/shared/cards/models';

@Injectable()
export class CategoriesService {
    categories: Record<number, ICategory[]> = {};

    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(brandId: number): Observable<ICategory[]> {
        let httpParams: HttpParams = new HttpParams();
        httpParams = httpParams.append("brandId", brandId);
        
        return this.categories[brandId] ? observableOf(this.categories[brandId]) : this.httpClient.get<ICategory[]>(environment.apis.home.categories, {
            params: httpParams
        }).pipe(
            map((categories: ICategory[]): ICategory[] => {
                this.categories[brandId] = categories;
                
                return categories;
            })
        );
    }

    getSingleCategory(brandId: number, categoryId: number): Observable<ICategory> {
        return this.categories ? observableOf(this.categories[brandId].find(category => categoryId == category.id)!) :
        this.fetchAll(brandId)
        .pipe(
            map((categories: ICategory[]): ICategory => {
                this.categories[brandId] = categories;
                
                return categories.find(category => categoryId == category.id)!;
            })
        );
    }
}