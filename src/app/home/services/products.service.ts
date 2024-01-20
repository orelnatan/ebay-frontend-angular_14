import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@ebay/env/environment';
import { GEventTypes } from '@ebay/core/models';
import { Interceptor, intercept } from '@ebay/shared/global-events';
import { IProduct } from '@ebay/home/models';

import { EntitiesAbstractService } from './entities-abstract.service';

@Interceptor([
  { type: GEventTypes.Logout, action: "dispose" }
])
@Injectable()
export class ProductsService implements EntitiesAbstractService {
  private _products: Record<number, IProduct[]> = {};

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    intercept(this);
  }
        
  fetchAll(familyId: number): Observable<IProduct[]> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append("familyId", familyId);
    
    return this._products[familyId] ? observableOf(this._products[familyId]) : this.httpClient.get<IProduct[]>(environment.apis.home.products.byFamilyId, {
      params: httpParams
    }).pipe(
      map((_products: IProduct[]): IProduct[] => {
        this._products[familyId] = _products;
        
        return _products;
      })
    );
  }

  fetchSingle(productId: number, familyId: number): Observable<IProduct> {
    return this._products[familyId] ? observableOf(this.find(productId, familyId)) :
    this.fetchAll(familyId)
    .pipe(
      map((_products: IProduct[]): IProduct => {
        this._products[familyId] = _products;
        
        return this.find(productId, familyId);
      })
    );
  }

  find(productId: number, familyId: number): IProduct {
    return { ...this._products[familyId].find(product => productId == product.id)! }
  }

  dispose(): void {
    this._products = {};
  }
}