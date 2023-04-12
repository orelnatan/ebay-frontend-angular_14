import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@ebay/env/environment';
import { IProduct } from '@ebay/home/models';

@Injectable()
export class ProductsService {
    products: Record<number, IProduct[]> = {};

    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(familyId: number): Observable<IProduct[]> {
        let httpParams: HttpParams = new HttpParams();
        httpParams = httpParams.append("familyId", familyId);
        
        return this.products[familyId] ? observableOf(this.products[familyId]) : this.httpClient.get<IProduct[]>(environment.apis.home.products.byFamilyId, {
            params: httpParams
        }).pipe(
            map((products: IProduct[]): IProduct[] => {
                this.products[familyId] = products;
                
                return products;
            })
        );
    }

    getSingleEntity(familyId: number, productId: number): Observable<IProduct> {
        return this.products ? observableOf(this.products[familyId].find(product => productId == product.id)!) :
        this.fetchAll(familyId)
        .pipe(
            map((products: IProduct[]): IProduct => {
                this.products[familyId] = products;
                
                return products.find(product => productId == product.id)!;
            })
        );
    }
}