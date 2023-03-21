import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';  

import { environment } from '@ebay/env/environment';
import { IBrand } from '@ebay/shared/cards/models';

@Injectable()
export class BrandsService {
    private brands: Array<IBrand>;

    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(): Observable<IBrand[]> {
        return this.brands ? observableOf(this.brands) : this.httpClient.get<IBrand[]>(environment.apis.home.brands)
        .pipe(
            map((brands: IBrand[]): IBrand[] => {
                this.brands = brands;
                
                return brands;
            })
        )
    }

    getSingleBrand(brandId: number): Observable<IBrand> {
        return this.brands ? observableOf(this.brands.find(brand => brandId == brand.id)!) :
        this.fetchAll()
        .pipe(
            map((brands: IBrand[]): IBrand => {
                this.brands = brands;

                return brands.find(brand => brandId == brand.id)!
            })
        )
    }
}